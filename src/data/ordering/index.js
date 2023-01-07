import { camelCase, isFunction, set as _set } from 'lodash'
import { getMockProductResponses } from './utils/parse-hars'
import { filterOrderingRequest } from './utils/parse-hars/filters'

// errors
// todo(chores) - not used.
const handleArgumentIsNotFunctionError = (argName) => log.i(`\`${argName}\` must be a function.`)

// `getFilename` functions
const getFilenameCamelCased = (name) => camelCase(name)

// `modulePathsHandler` functions
const handleHarModulePaths = (modulePaths, requireFn, aTarget) => {
  if (!isFunction(requireFn)) return handleArgumentIsNotFunctionError('requireFn')
  const target = aTarget || {}
  for (const modulePath of modulePaths) {
    const result = /^\.\/(?<filename>.*)\.har\.json/.exec(modulePath)
    if (!result) continue

    const filename = getFilenameCamelCased(result.groups.filename)
    if (!filename) continue

    target[filename] = requireFn(modulePath)
  }
  return target
}

const handleOrderingModulePaths = (modulePaths, requireFn, aTarget) => {
  if (!isFunction(requireFn)) return handleArgumentIsNotFunctionError('requireFn')
  const target = aTarget || {}
  for (const modulePath of modulePaths) {
    const result = /^\.\/(?<filename>.*)\.json/.exec(modulePath)
    if (!result) continue

    const filename = result.groups.filename
    if (!filename) continue
    const [id, hotOrIce] = filename.split('-')
    const setPath = `['${id}'].${hotOrIce}`
    const value = requireFn(modulePath)
    _set(target, setPath, value)
  }
  return target
}

// todo(refactor) - into one `importAll` function with parameters
const importAllHarFiles = (modulePathsHandler = handleHarModulePaths) => {
  if (!isFunction(modulePathsHandler)) return handleArgumentIsNotFunctionError('modulePathsHandler')
  const requireFn = require.context('../hars', false, /\.har\.json$/)
  const modulePaths = requireFn.keys().filter((key) => key.startsWith('./'))
  const modules = modulePathsHandler(modulePaths, requireFn)
  return modules
}

// todo(refactor) - into one `importAll` function with parameters
const importAllOrderingFiles = (modulePathsHandler = handleOrderingModulePaths) => {
  if (!isFunction(modulePathsHandler)) return handleArgumentIsNotFunctionError('modulePathsHandler')
  const requireFn = require.context('./', false, /\.json$/)
  const modulePaths = requireFn.keys().filter((key) => key.startsWith('./'))
  const modules = modulePathsHandler(modulePaths, requireFn)
  return modules
}

const orderingModules = importAllOrderingFiles()
const harModules = importAllHarFiles()

const loopModules = (modules, ...callbacks) => {
  for (const key in modules) {
    const value = modules[key]
    callbacks.forEach((cb) => cb(key, value))
  }
}

const productResponses = {}
loopModules(harModules, (key, value) => {
  productResponses[key] = getMockProductResponses(value, filterOrderingRequest)
})

const parseProductId = (id) => {
  return id.split('-')
}

const parseProductResponses = (responses) => {
  const result = {}
  for (const category in responses) {
    const productById = responses[category]
    for (const index in productById) {
      const dataById = productById[index]
      for (const id in dataById) {
        const data = dataById[id]
        const [uid, hotOrIced] = parseProductId(id)
        if (!(uid in result)) result[uid] = {}
        result[uid][hotOrIced] = data
      }
    }
  }
  return result
}

const productResponsesParsed = parseProductResponses(productResponses)

const mockOrderingResponses = {}
loopModules(orderingModules, (key, value) => {
  mockOrderingResponses[key] = value
})

const traverseObject = (maxDepth = 1) => {
  let acc = []
  let cur = []
  const get = () => {
    return acc
  }
  return function traverse(data, depth = 0) {
    const keys = Object.keys(data)
    for (const i in keys) {
      if (depth <= maxDepth && typeof data[keys[i]] === 'object') {
        cur.push(keys[i])
        traverse(data[keys[i]], depth + 1)
      } else {
        acc.push([cur.join('.'), data])
        cur = []
      }
    }

    return [get, acc]
  }
}

const traverseDepthOne = traverseObject()
traverseDepthOne(productResponsesParsed)
const [getResult] = traverseDepthOne(mockOrderingResponses)
const result = getResult()
const allResponses = result.reduce((acc, [pathStr, value]) => {
  _set(acc, pathStr, value)
  return acc
}, {})

const sanityTest = () => {
  //  log.i("allResponses: ", allResponses)
  //  log.i({ mockOrderingResponses, productResponsesParsed })
  //  const setTest = {}
  //  _set(setTest, ["hot", "3"], "sometextvalue")
  //  _set(setTest, ["hot", "test"], "sometextvalue")
  //  _set(setTest, "somepath", "sometextvalue")
  //  log.i({ setTest })
}
sanityTest()

export default allResponses
