import ProductListWrapper from './styled'
import { v1 as uuidv1 } from 'uuid'

import { DataContext } from 'context/DataContext'
import { useContext } from 'react'

import Product from 'components/Product'

const ProductList = () => {
    const { deals } = useContext(DataContext)

    return (
        <ProductListWrapper>
            {deals.map((deal, id) => {
                id = uuidv1()
                return <Product {...deal} key={id} />
            })}
        </ProductListWrapper>
    )
}

export default ProductList
