import { RESOURCE_TYPE_XHR } from './constants'

export type RequestFilter = (request: any) => boolean

const getUrlPathname = (url: string) => new URL(url).pathname

// todo: extract `fileNameFromPathnameForOrdering` out of here.
const fileNameFromPathnameForOrdering = (pathname: string) => {
  const result = /\/bff\/ordering\/(?<hotOrIced>.*)\/(?<productNumber>.*)/.exec(pathname)
  if (result == null) return

  const {
    groups: { hotOrIced, productNumber },
  } = result
  return `${hotOrIced}-${productNumber}`
}

type GetFilenameFromPathnameFunction = (pathname: string) => string | undefined

const getProductDataFromEntry = ({ request, response }, getFileNameFromPathname: GetFilenameFromPathnameFunction) => {
  if (!request || !response || typeof getFileNameFromPathname !== 'function') return

  const pathname = getUrlPathname(request.url)
  const filename = getFileNameFromPathname(pathname)
  const data = JSON.parse(response.content.text)
  return { [filename as string]: data }
}

// todo: type `harData`
export const getMockProductResponses = (
  data: any,
  requestFilter: RequestFilter,
  getFileNameFromPathname: GetFilenameFromPathnameFunction = fileNameFromPathnameForOrdering,
  // todo: use `isHar`
  isHar = true,
) => {
  if (!data) return
  if (typeof requestFilter !== 'function') return

  const result = []
  const {
    log: { entries },
  } = data

  for (const entry of entries) {
    const { _resourceType, request } = entry
    if (_resourceType !== RESOURCE_TYPE_XHR) continue
    if (requestFilter(request)) continue
    result.push(getProductDataFromEntry(entry, getFileNameFromPathname))
  }

  return result
}
