import { RequestFilter } from "src/types/parse-hars"
import { FILTER_PATH_ORDERING } from "./constants"

export const filterOrderingRequest: RequestFilter = (request) => !request || !request.url.includes(FILTER_PATH_ORDERING)
