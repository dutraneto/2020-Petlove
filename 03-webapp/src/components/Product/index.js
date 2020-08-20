import * as S from './styled'

const Product = (props) => {
    const { desc, discount, discountAmount, path, price, suffix, width, height } = props

    const priceWithDiscount = (discount ? price - (price * discountAmount) / 100 : price).toFixed(2)

    return (
        <S.ProductItem className={suffix}>
            <S.ProductWrapper>
                <S.ProductLink href=''>
                    <S.ProductImg
                        src={path}
                        alt={desc}
                        loading='lazy'
                        width={width}
                        height={height}
                    />
                    <S.ProductDescription>
                        <S.ProductTitle>{desc}</S.ProductTitle>
                        <S.ProductPrice>
                            ${priceWithDiscount}{' '}
                            {discount ? '(' + discountAmount + '% off' + ')' : null}
                        </S.ProductPrice>
                    </S.ProductDescription>
                </S.ProductLink>
            </S.ProductWrapper>
        </S.ProductItem>
    )
}

export default Product
