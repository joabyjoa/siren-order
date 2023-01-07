'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const GalleryWrap = styled.div`
  padding: 1rem;
  margin: 0 -1rem;
  background-color: #1f3933;

  img {
    display: block;
    margin: 0 auto;
  }

  .name {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: #fff;
  }

  .calories {
    font-size: 1rem;
    text-align: center;
    color: #ccc;
  }
`

type Props = {
  name: string
  calories?: number
  imageURL: string
  imageAlt: string
}

export default function Gallery({ name, calories, imageURL, imageAlt }: Props) {
  return (
    <GalleryWrap>
      <Image src={imageURL} alt={imageAlt} width={300} height={300} />
      <p className="name">{name}</p>
      {calories && <p className="calories">{calories} Calories🐽</p>}
    </GalleryWrap>
  )
}
