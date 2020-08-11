import * as S from './styled'

const Hero = ({ bgImg }) => {
    return (
        <S.Hero>
            <S.CarrouselWrapper>
                <S.CarrouselBtn className='left' aria-label='left' />
                <S.CarrouselBtn className='right' aria-label='right' />
                <S.DescriptionWrapper>
                    <S.Title>cats jackets</S.Title>
                    <S.Description>Protect your buddy during Winter</S.Description>
                    <S.ShopBtn>shop now</S.ShopBtn>
                </S.DescriptionWrapper>

                <S.Carrousel>
                    <S.SlideList>
                        <S.Slide>
                            <S.ImgWrapper>
                                <S.Img src={bgImg}></S.Img>
                            </S.ImgWrapper>
                        </S.Slide>
                    </S.SlideList>
                </S.Carrousel>
            </S.CarrouselWrapper>
        </S.Hero>
    )
}

export default Hero
