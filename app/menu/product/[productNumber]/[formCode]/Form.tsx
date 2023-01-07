'use client'

import { SizeCode } from 'app/menu/types'
import React, { useState, useMemo } from 'react'
import { OrderingProduct } from '../../types'
import Gallery from './Gallery'
import SizeOptionSelector from './SizeOptionSelector'

type Props = {
  product: OrderingProduct
}

const Form = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState<SizeCode>(product.sizes[0]?.sizeCode)
  const selectedSizeData = useMemo(
    () => product.sizes.find((item) => item.sizeCode === selectedSize),
    [product, selectedSize],
  )

  return (
    <div>
      <Gallery
        name={product.name}
        imageURL={product.assets.masterImage.uri}
        imageAlt={product.name}
        calories={selectedSizeData?.nutrition.calories.displayValue}
      />
      <SizeOptionSelector onSelect={setSelectedSize} selectedSize={selectedSize} />
    </div>
  )
}

export default Form
