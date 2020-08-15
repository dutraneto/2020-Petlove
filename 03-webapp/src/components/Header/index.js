import * as S from './styled'

import Logo from 'components/Logo'
import Navbar from 'components/Navbar'

import { DataContext } from 'context/DataContext'
import { useContext, useState } from 'react'

const Header = (props) => {
    const { logo, routes } = useContext(DataContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <S.Header>
            <S.Container>
                <S.Row className='u-pos-absolute'>
                    <Logo logo={logo} />
                    <Navbar
                        routes={routes}
                        setIsMenuOpen={setIsMenuOpen}
                        isMenuOpen={isMenuOpen}
                        openMenu={openMenu}
                    />

                    <S.IconMenuWrapper onClick={openMenu} className='menu-open'>
                        <S.IconMenu />
                    </S.IconMenuWrapper>
                </S.Row>
            </S.Container>
        </S.Header>
    )
}

export default Header
