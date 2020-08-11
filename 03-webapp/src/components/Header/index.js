import * as S from './styled'

import Logo from 'components/Logo'
import Navbar from 'components/Navbar'

const Header = (props) => (
    <S.Header>
        <S.Container>
            <S.Row>
                <Logo path={props.logo} />
                <Navbar routes={props.routes} />
            </S.Row>
        </S.Container>
    </S.Header>
)

export default Header
