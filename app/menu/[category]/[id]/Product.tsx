import { Product as Data } from 'app/menu/types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  data: Data
}

export default function Product({ data }: Props) {
  const thumbnail = data.assets?.masterImage.uri
  return (
    <Link href={`/menu${data.uri}`}>
      {thumbnail && <Image src={thumbnail} alt={data.name} width={100} height={100} />}
    </Link>
  )
}
