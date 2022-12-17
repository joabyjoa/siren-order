'use client'

import Menu from './Menu'
import { MenuElement } from './types'

type Props = {
  data: MenuElement
}

export default function MenuGroup({ data }: Props) {
  return (
    <div key={data.id}>
      <h3>{data.name}</h3>
      <ul>
        {data.children.map((item) => (
          <li key={item.id}>
            <Menu data={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
