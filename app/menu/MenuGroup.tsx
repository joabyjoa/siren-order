'use client'

import styled from 'styled-components'
import Menu from './Menu'
import { MenuElement } from './types'

const GroupName = styled.h3`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

type Props = {
  data: MenuElement
}

export default function MenuGroup({ data }: Props) {
  return (
    <div key={data.id}>
      <GroupName>{data.name}</GroupName>
      {data.children.map((item) => (
        <Menu key={item.id} data={item} />
      ))}
    </div>
  )
}
