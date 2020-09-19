import * as S from './styled'
import Button from 'components/Button'

import SocialIcons from 'components/SocialIcons'

const Footer = (props) => {
    
    const buttonStyle = 'btn-signup'

    return (
        <S.Footer>
            <S.FooterWrapper className='u-pd-sm'>
                <S.Deliveries className='u-mb-sm'>
                    <S.InfoWrapper>
                        <S.Info>free delivery</S.Info>
                        <S.Details>Around the world starting from $100</S.Details>
                    </S.InfoWrapper>
                    <S.InfoWrapper className='borders'>
                        <S.Info>free return</S.Info>
                        <S.Details>66 rue Condorcet 75009 Paris, France</S.Details>
                    </S.InfoWrapper>
                    <S.InfoWrapper>
                        <S.Info>secure payments</S.Info>
                        <S.Details>Mastercard, Visa and PayPal</S.Details>
                    </S.InfoWrapper>
                </S.Deliveries>

                <S.HRWrapper>
                    <S.HR className='hr u-mb-sm' />
                </S.HRWrapper>

                <S.SocialWrapper className='u-mb-sm'>
                    <S.FollowUs>
                        <S.Info>follow us</S.Info>
                        {/* Social Icons */}
                        <SocialIcons />
                    </S.FollowUs>
                    <S.LogoWrapper>
                        <S.LogoLink href='#'>
                            <S.LogoBlack />
                        </S.LogoLink>
                    </S.LogoWrapper>
                    <S.ContactWrapper>
                        <S.ContactForm action='#' method='POST'>
                            <S.SignupWrapper>
                                <S.SignupLabel htmlFor='signup'>sign up to our news</S.SignupLabel>
                                <S.SignupWrapper>
                                    <S.SignupControl
                                        id='signup'
                                        type='email'
                                        name=''
                                        placeholder='Enter your email'
                                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                                        required
                                    />
                                    <Button buttonStyle={buttonStyle}>&rarr;</Button>
                                </S.SignupWrapper>
                            </S.SignupWrapper>
                        </S.ContactForm>
                    </S.ContactWrapper>
                </S.SocialWrapper>
            </S.FooterWrapper>
        </S.Footer>
    )
}

export default Footer
