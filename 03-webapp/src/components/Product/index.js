import * as S from './styled'

const Product = () => {
    return (
        <S.ProductWrapper className='deals'>
            <S.ProductLink href=''>
                <S.ProductImg
                    src='https://res.cloudinary.com/duim1pyqp/image/upload/v1596550359/petlove/content/bat-dog-toy_mrylbb.png'
                    alt=''
                />
                <S.ProductDescription>
                    <S.ProductTitle>Bat Dog</S.ProductTitle>
                    <S.ProductPrice>1.99</S.ProductPrice>
                </S.ProductDescription>
            </S.ProductLink>
        </S.ProductWrapper>
    )
}

export default Product
