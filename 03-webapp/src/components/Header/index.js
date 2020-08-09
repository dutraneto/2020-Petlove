import * as S from './styled'
import Logo from 'components/Logo'

const Header = (props) => (
    <S.Header>
        <S.Container>
            <S.Row>
                <Logo />
            </S.Row>
        </S.Container>
    </S.Header>
)

export default Header
