import * as S from './styled'

import ProductList from 'components/ProductList'

import { DataContext } from 'context/DataContext'
import { useContext } from 'react'

const Catalog = () => {
    const { products } = useContext(DataContext)

    // Should filter only products with big deals (with discount)
    const onlyProductsWithDiscountApplied = products.filter((productWith) => productWith.discount)

    return (
        <S.CatalogWrapper className='u-m-md'>
            <S.CatalogTitle>Deals of the Day</S.CatalogTitle>

            <ProductList products={onlyProductsWithDiscountApplied} />

            <S.CatalogShow className='u-pd-sm'>
                <hr className='hr' />
                <a href='#'>
                    <S.Show>show all</S.Show>
                </a>
                <hr className='hr' />
            </S.CatalogShow>
        </S.CatalogWrapper>
    )
}

export default Catalog
