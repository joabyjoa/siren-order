'use client'

import { MenuElement } from 'app/menu/types'
import styled from 'styled-components'
import Product from './Product'

const GroupName = styled.h3`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex-basis: 50%;
  }
`

type Props = {
  data: MenuElement
}

export default function ProductGroup({ data }: Props) {
  return (
    <div>
      <GroupName>{data.name}</GroupName>
      <ProductsWrap>
        {data.products.map((product) => (
          <Product key={product.productNumber} data={product} />
        ))}
      </ProductsWrap>
    </div>
  )
}
