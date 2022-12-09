import menu from '~/data/menu.json'
import { NextApiRequest, NextApiResponse } from 'next'

export type MenuResponse = Record<'menus', any>

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') res.status(405).end()

  res.status(200).send(menu as MenuResponse)
}
