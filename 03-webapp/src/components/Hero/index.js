import * as S from './styled'
import Button from 'components/Button'
import Slider from './slider'

const Hero = (props) => {
    const buttonStyle = 'btn-shop'

    return (
        <S.Hero>
            <S.CarrouselWrapper>
                <S.DescriptionWrapper>
                    <S.Title>cats jackets</S.Title>
                    <S.Description>Protect your buddy during Winter</S.Description>
                    <Button buttonStyle={buttonStyle}>shop now</Button>
                </S.DescriptionWrapper>
                <S.Carrousel>
                    <S.SlideList>
                        <S.Slide>
                            <S.ImgWrapper>
                                <Slider />
                            </S.ImgWrapper>
                        </S.Slide>
                    </S.SlideList>
                </S.Carrousel>
            </S.CarrouselWrapper>
        </S.Hero>
    )
}

export default Hero
