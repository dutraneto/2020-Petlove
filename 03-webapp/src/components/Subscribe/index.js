import * as S from './styled'
import Button from 'components/Button'

const Subscribe = () => {

    const buttonStyle = "btn-subscribe"

    return (
        <S.SubscribeWrapper className='u-pd-sm'>
            <S.FormGroup action='#' method='POST'>
                <S.Label htmlFor='subscribe__email'>Subscribe now</S.Label>
                <S.FormControl
                    id='subscribe__email'
                    type='email'
                    name=''
                    placeholder='Enter your email'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                    required
                />
                <Button buttonStyle={buttonStyle}>subscribe</Button>
            </S.FormGroup>
        </S.SubscribeWrapper>
    )
}

export default Subscribe
