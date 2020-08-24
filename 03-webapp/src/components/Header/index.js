import * as S from './styled'

import Logo from 'components/Logo'
import Navbar from 'components/Navbar'

import { DataContext } from 'context/DataContext'
import { useContext, useState } from 'react'

const Header = (props) => {
    const { routes } = useContext(DataContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <S.Header>
            <S.Container>
                <S.Row className=''>
                    <Logo logo='/images/petlove-logo.png' />
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
