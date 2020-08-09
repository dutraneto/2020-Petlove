import * as S from './styled'

import Link from 'next/link'

const Logo = (props) => (
    <Link href='./' passHref>
        <S.LogoWrapper title='Home page'>
            <S.Logo
                src='/images/petlove-logo.png'
                loading='lazy'
                width='226'
                height='61'
                alt='Site Logo'
            />
        </S.LogoWrapper>
    </Link>
)

export default Logo
