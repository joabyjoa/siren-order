import { MenuElement } from 'app/menu/types'
import Product from './Product'

type Props = {
  data: MenuElement
}

export default function ProductGroup({ data }: Props) {
  return (
    <div>
      <h3>{data.name}</h3>
      {data.products.map((product) => (
        <Product key={product.productNumber} data={product} />
      ))}
    </div>
  )
}
