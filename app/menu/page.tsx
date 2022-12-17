import MenuGroup from './MenuGroup'
import { Menu } from './types'

const fetchMenu = async () => {
  const res = await fetch('http://localhost:3000/api/menu')
  return res.json() as Promise<Menu>
}

export default async function MenuPage() {
  const { menus } = await fetchMenu()

  return (
    <div>
      <h2>Menu</h2>
      {menus.map((data) => (
        <MenuGroup key={data.id} data={data} />
      ))}
    </div>
  )
}
