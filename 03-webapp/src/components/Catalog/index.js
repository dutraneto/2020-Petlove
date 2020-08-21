import * as S from './styled'

import ProductList from 'components/ProductList'

import { DataContext } from 'context/DataContext'
import { useState, useContext } from 'react'

const Catalog = () => {
    const { products } = useContext(DataContext)

    // Set quantity of products to show initially
    const initialValue = 3
    const [visible, setVisible] = useState(initialValue)

    // Should filter only products with big deals (with discount)
    const onlyProductsWithDiscountApplied = products.filter((productWith) => productWith.discount)
    console.log(onlyProductsWithDiscountApplied)

    return (
        <S.CatalogWrapper className='u-m-md'>
            <S.CatalogTitle>Deals of the Day</S.CatalogTitle>

            <ProductList products={onlyProductsWithDiscountApplied} visible={visible} />

            <S.CatalogShow className='u-pd-sm'>
                {visible < onlyProductsWithDiscountApplied.length && (
                    <>
                        <hr className='hr' />
                        <S.Show onClick={() => setVisible(onlyProductsWithDiscountApplied.length)}>
                            show all
                        </S.Show>
                        <hr className='hr' />
                    </>
                )}
                {visible > initialValue && (
                    <>
                        <hr className='hr' />
                        <S.Show onClick={() => setVisible(initialValue)}>show less</S.Show>
                        <hr className='hr' />
                    </>
                )}
            </S.CatalogShow>
        </S.CatalogWrapper>
    )
}

export default Catalog
