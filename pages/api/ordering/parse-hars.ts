import orderingResponse from '~/data/ordering'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json(orderingResponse)
}
