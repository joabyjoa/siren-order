import { Menu } from 'app/menu/types'
import ProductGroup from './ProductGroup'

const fetchMenu = async () => {
  const res = await fetch('http://localhost:3000/api/menu')
  return res.json() as Promise<Menu>
}

export default async function SubMenuPage({ params }: { params: { category: string; id: string } }) {
  const { menus } = await fetchMenu()

  const category = menus.find((menu) => menu.id === params.category)
  const productGroups = category?.children.find((product) => product.id === params.id)

  return (
    <div>
      <h2>{params.id}</h2>
      {productGroups?.children.map((data) => (
        <ProductGroup key={data.id} data={data} />
      ))}
    </div>
  )
}
