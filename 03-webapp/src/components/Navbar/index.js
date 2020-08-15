import * as S from './styled'
import Link from 'next/link'

const Navbar = ({ routes, isMenuOpen, setIsMenuOpen, openMenu }) => {
    const state = isMenuOpen ? 'open' : ''
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
        <S.NavbarWrapper className={state}>
            <S.LinkList>
                <S.IconMenuWrapper onClick={openMenu}>
                    <S.IconCloseMenu />
                </S.IconMenuWrapper>
                {NavItems}
                <Link href='./' as='' passHref>
                    <S.Link title='Click on Shop Cart'>
                        <S.IconWrapper>
                            <S.IconHandbag />
                        </S.IconWrapper>
                    </S.Link>
                </Link>
            </S.LinkList>
        </S.NavbarWrapper>
    )
}

export default Navbar
