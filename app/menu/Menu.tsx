'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MenuElement } from './types'

type Props = {
  data: MenuElement
}

export default function Menu({ data }: Props) {
  const thumbnail = data.children[0]?.products[0]?.assets?.masterImage.uri
  return (
    <Link href={`/menu/${data.uri}`}>
      {thumbnail && <Image src={thumbnail} alt={data.name} width={100} height={100} />}
      <p>{data.name}</p>
    </Link>
  )
}
