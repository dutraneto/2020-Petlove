import * as S from './styled'

import Button from 'components/Button'

import ProductList from 'components/ProductList'

import { DataContext } from 'context/DataContext'
import { useState, useContext } from 'react'

const Catalog = () => {
    const { products } = useContext(DataContext)

    // Set quantity of products to show initially
    const showOnlyThreeItems = 3
    const [showAll, setShowAll] = useState(false)

    // Btn Style
    const buttonStyle = 'btn-showAll'

    // Should filter only products with big deals (with discount)
    const onlyProductsWithDiscountApplied = products.filter((productWith) => productWith.discount)

    const allItems = onlyProductsWithDiscountApplied.length

    return (
        <S.CatalogWrapper className='u-m-md'>
            <S.CatalogTitle>Deals of the Day</S.CatalogTitle>
            <ProductList
                products={onlyProductsWithDiscountApplied}
                visibleItems={showAll ? allItems : showOnlyThreeItems}
            />
            <S.CatalogShow className='u-pd-sm'>
                <hr className='hr' />
                <Button buttonStyle={buttonStyle} onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'less' : 'all'}
                </Button>
                <hr className='hr' />
            </S.CatalogShow>
        </S.CatalogWrapper>
    )
}

export default Catalog
