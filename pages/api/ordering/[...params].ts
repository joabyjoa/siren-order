import { NextApiRequest, NextApiResponse } from 'next'
import allResponses from '~/data/ordering'

export type OrderingResponse = Record<'products', any>

export type ProductId = string

export type HotOrIced = 'hot' | 'iced'

export type OrderingRouteParams = [ProductId, HotOrIced]

const getDataByParams = (params: OrderingRouteParams): OrderingResponse | null => {
  const [productId, hotOrIced] = params
  const result = allResponses[productId][hotOrIced]
  if (!result) return null
  return result
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { params } = req.query
  const data = getDataByParams(params as OrderingRouteParams)
  if (!data) return res.status(404).json({ message: 'Not Found.' })
  res.status(200).json(data)
}
