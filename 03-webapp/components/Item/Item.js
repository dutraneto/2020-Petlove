import Link from 'next/link'

export default function Item({ item }) {
    return (
        <li>
            <Link href='/api/product/[id]' as={`/api/product/${item.id}`}>
                <a>{item.desc}</a>
            </Link>
        </li>
    )
}
