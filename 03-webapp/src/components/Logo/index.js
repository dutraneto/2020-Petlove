import * as S from './styled'

const Logo = (props) => (
    <S.LogoWrapper href='./' title='Home page'>
        <S.Logo
            src='/images/petlove-logo.png'
            loading='lazy'
            width='226'
            height='61'
            alt='Site Logo'
        />
    </S.LogoWrapper>
)

export default Logo
