import { Ordering } from '../../types'
import Form from './Form'

type OrderingProductParams = { productNumber: number; formCode: number }

const fetchOrdering = async (params: OrderingProductParams) => {
  const res = await fetch(`http://localhost:3000/api/ordering/${params.productNumber}/${params.formCode}`)
  return res.json() as Promise<Ordering>
}

const ProductPage = async ({ params }: { params: OrderingProductParams }) => {
  const data = await fetchOrdering(params)
  const product = data.products[0]

  return <Form product={product} />
}

export default ProductPage
