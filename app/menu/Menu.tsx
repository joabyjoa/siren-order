'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { MenuElement } from './types'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  img {
    border-radius: 50%;
  }
  p {
    font-size: 1.25rem;
  }
`

type Props = {
  data: MenuElement
}

export default function Menu({ data }: Props) {
  const thumbnail = data.children[0]?.products[0]?.assets?.masterImage.uri
  return (
    <Link href={`/menu/${data.uri}`}>
      <Wrap>
        {thumbnail && <Image src={thumbnail} alt={data.name} width={72} height={72} />}
        <p>{data.name}</p>
      </Wrap>
    </Link>
  )
}
