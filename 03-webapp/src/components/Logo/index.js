import * as S from './styled'
import Link from 'next/link'

const Logo = ({ logo }) => {
    return (
        <Link href='./' passHref>
            <S.LogoWrapper>
                <S.Logo src={logo} />
            </S.LogoWrapper>
        </Link>
    )
}

export default Logo
