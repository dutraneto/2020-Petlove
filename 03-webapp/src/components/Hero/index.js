import * as S from './styled'

import AwesomeSlider from 'react-awesome-slider'
import images from './images'

const Hero = (props) => {
    const Slider = () => (
        <AwesomeSlider>
            {images.map((imageSrc, index) => {
                return <S.Img key={index} data-src={imageSrc} />
            })}
        </AwesomeSlider>
    )

    return (
        <S.Hero>
            <S.CarrouselWrapper>
                <S.DescriptionWrapper>
                    <S.Title>cats jackets</S.Title>
                    <S.Description>Protect your buddy during Winter</S.Description>
                    <S.ShopBtn>shop now</S.ShopBtn>
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
