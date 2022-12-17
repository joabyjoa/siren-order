'use client'

import { Product as Data } from 'app/menu/types'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 1rem 0;
  width: 100%;
  img {
    display: block;
    margin: 0 auto;
    border-radius: 50%;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
  }
`

type Props = {
  data: Data
}

export default function Product({ data }: Props) {
  const thumbnail = data.assets?.masterImage.uri
  return (
    <Link href={`/menu${data.uri}`}>
      <Wrap>
        {thumbnail && <Image src={thumbnail} alt={data.name} width={100} height={100} />}
        <p>{data.name}</p>
      </Wrap>
    </Link>
  )
}
