import * as S from './styled'
import { v1 as uuidv1 } from 'uuid'

import Product from 'components/Product'

const ProductList = ({ products, visibleItems }) => {
    if (products === undefined || products.length == 0)
        return (
            <S.NoProductsAvailable>
                We currently don't have any deal available =( !
            </S.NoProductsAvailable>
        )
    return (
        <S.ProductListWrapper>
            {products.slice(0, visibleItems).map((product, id) => {
                product.id = uuidv1()
                return <Product {...product} key={product.id} />
            })}
        </S.ProductListWrapper>
    )
}

export default ProductList
