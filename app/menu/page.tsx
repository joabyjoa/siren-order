import MenuGroup from './MenuGroup'
import { Menu } from './types'

const fetchMenu = async () => {
  const res = await fetch('http://localhost:3000/api/menu')
  return res.json() as Promise<Menu>
}

export default async function MenuPage() {
  const { menus } = await fetchMenu()

  return (
    <>
      {menus.map((data) => (
        <MenuGroup key={data.id} data={data} />
      ))}
    </>
  )
}
