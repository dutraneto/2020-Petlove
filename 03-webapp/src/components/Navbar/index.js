import * as S from './styled'

import Link from 'next/link'

const Navbar = (props) => {
    const { routes } = props

    const NavItems = routes
        .map((route, index) => {
            return (
                <S.LinkItem key={index}>
                    <Link href='./' as={route.link} passHref>
                        <S.Link>{route.label.toUpperCase()}</S.Link>
                    </Link>
                </S.LinkItem>
            )
        })
        .map((navItem) => navItem)

    return <S.LinkList>{NavItems}</S.LinkList>
}

export default Navbar
