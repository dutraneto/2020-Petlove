import * as S from './styled'
import Link from 'next/link'

const Navbar = (props) => {
    const { routes } = props

    const NavItems = routes
        .map((route, index) => {
            return (
                <S.LinkItem key={index}>
                    <Link href='./' as={route.link} passHref>
                        <S.Link title={route.label}>{route.label}</S.Link>
                    </Link>
                </S.LinkItem>
            )
        })
        .map((navItem) => navItem)

    return (
        <S.LinkList>
            {NavItems}
            <Link href='./' as='' passHref>
                <S.Link title='Click on Shop Cart'>
                    <S.IconWrapper>
                        <S.IconHandbag />
                    </S.IconWrapper>
                </S.Link>
            </Link>
        </S.LinkList>
    )
}

export default Navbar
