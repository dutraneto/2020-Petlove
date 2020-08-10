import * as S from './styled'

import Link from 'next/link'

const Navbar = (props) => {
    const { routes } = props
    console.log(routes)
    const NavItems = routes.map((route) => {
        return (
            <S.LinkItem>
                <Link href='./' passHref>
                    <S.Link>{route['label']}</S.Link>
                </Link>
            </S.LinkItem>
        )
    })

    return (
        <S.LinkList>
            <NavItems />
        </S.LinkList>
    )
}

export default Navbar
