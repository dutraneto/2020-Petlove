import * as S from './styled'

import Link from 'next/link'

const Logo = ({ path }) => (
    <Link href='./' passHref>
        <S.LogoWrapper>
            <S.Logo src={path} />
        </S.LogoWrapper>
    </Link>
)

export default Logo
