import * as S from './styled'

import Logo from 'components/Logo'
import Navbar from 'components/Navbar'

import { DataContext } from 'context/DataContext'
import { useContext } from 'react'

const Header = (props) => {
    const { logo, routes } = useContext(DataContext)
    return (
        <S.Header>
            <S.Container>
                <S.Row className='u-pos-absolute'>
                    <Logo logo={logo} />
                    <Navbar routes={routes} />
                    <S.IconMenuWrapper>
                        <S.IconMenu />
                    </S.IconMenuWrapper>
                </S.Row>
            </S.Container>
        </S.Header>
    )
}

export default Header
