'use client'

import { SizeCode } from 'app/menu/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

export type SizeOption = {
  size: SizeCode
  detailSize: string
  imageUrl: string
  activeImageUrl: string
}

// TODO: API에서 데이터 받아오기
const defaultOptions: SizeOption[] = [
  {
    size: SizeCode.Short,
    detailSize: '8oz',
    imageUrl: 'https://www.starbucks.com/app-assets/0295bad53506b2b3c22b7e5a16fd1554.svg',
    activeImageUrl: 'https://www.starbucks.com/app-assets/06ea008c02e29bbc7f8f9885c1f400f2.svg',
  },
  {
    size: SizeCode.Tall,
    detailSize: '12oz',
    imageUrl: 'https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg',
    activeImageUrl: 'https://www.starbucks.com/app-assets/8f80d6b33459b4fada562d0c76fe0880.svg',
  },
  {
    size: SizeCode.Grande,
    detailSize: '16oz',
    imageUrl: 'https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg',
    activeImageUrl: 'https://www.starbucks.com/app-assets/8f80d6b33459b4fada562d0c76fe0880.svg',
  },
  {
    size: SizeCode.Venti,
    detailSize: '20oz',
    imageUrl: 'https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg',
    activeImageUrl: 'https://www.starbucks.com/app-assets/8f80d6b33459b4fada562d0c76fe0880.svg',
  },
]

const Title = styled.h1`
  margin-bottom: 20px;
  padding: 5px;
  font-size: 1.25rem;
  border-bottom: 2px solid #d4e9e2;
`

const OptionGroup = styled.ul`
  position: relative;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Option = styled.li`
  width: 80px;
  padding: 0;
  margin: 0;
  img {
    display: block;
    margin: 5px auto 10px;
  }

  .size-name {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
  }
  .detail-size {
    font-size: 0.75rem;
    font-weight: 400;
    text-align: center;
  }
`

const Indicator = styled(motion.div)`
  position: absolute;
  z-index: -1;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border: 2px solid #00704a;
  border-radius: 100%;
  background-color: #00704b23;
`

type Props = {
  title?: ReactNode
  options?: SizeOption[]
  selectedSize?: SizeCode
  onSelect?(size: SizeCode): void
}

export default function SizeOptionSelector({
  title = 'Size options',
  options = defaultOptions,
  selectedSize,
  onSelect,
}: Props) {
  const selectedIndex = options.findIndex((option) => option.size === selectedSize)

  return (
    <div>
      <Title>{title}</Title>
      <OptionGroup role="combobox">
        {selectedSize && <Indicator animate={{ left: 80 * selectedIndex + (80 - 56) / 2 }} />}
        {options?.map(({ size, detailSize, imageUrl, activeImageUrl }) => {
          const isActive = size === selectedSize
          return (
            <Option key={size} onClick={() => onSelect?.(size)} role="option">
              <Image src={isActive ? activeImageUrl : imageUrl} alt={size} width={24} height={40} />
              <p className="size-name">{size}</p>
              <p className="detail-size">{detailSize}</p>
            </Option>
          )
        })}
      </OptionGroup>
    </div>
  )
}
