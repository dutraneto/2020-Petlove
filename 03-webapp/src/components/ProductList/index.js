import ProductListWrapper from './styled'
import { v1 as uuidv1 } from 'uuid'

import Product from 'components/Product'

const ProductList = ({ products, visible }) => {
    return (
        <ProductListWrapper>
            {products.slice(0, visible).map((product, id) => {
                product.id = uuidv1()
                return <Product {...product} key={product.id} />
            })}
        </ProductListWrapper>
    )
}

export default ProductList
