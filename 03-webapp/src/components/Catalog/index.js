import * as S from './styled'

import ProductList from 'components/ProductList'

import { DataContext } from 'context/DataContext'
import { useState, useContext } from 'react'

const Catalog = () => {
    const { products } = useContext(DataContext)
    // Set quantity of products to show initially
    const [visible, setVisible] = useState(3)

    // Should filter only products with big deals (with discount)
    const onlyProductsWithDiscountApplied = products.filter((productWith) => productWith.discount)

    // Show all products with big deals
    const showAll = (e) => {
        e.preventDefault()
        setVisible(onlyProductsWithDiscountApplied.length)
    }

    return (
        <S.CatalogWrapper className='u-m-md'>
            <S.CatalogTitle>Deals of the Day</S.CatalogTitle>

            <ProductList products={onlyProductsWithDiscountApplied} visible={visible} />

            <S.CatalogShow className='u-pd-sm'>
                {visible < onlyProductsWithDiscountApplied.length && (
                    <>
                        <hr className='hr' />
                        <S.Show onClick={showAll}>show all</S.Show>
                        <hr className='hr' />
                    </>
                )}
            </S.CatalogShow>
        </S.CatalogWrapper>
    )
}

export default Catalog
