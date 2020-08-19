import * as S from './styled'

import ProductList from 'components/ProductList'

const Catalog = () => {
    return (
        <S.CatalogWrapper className='u-m-md'>
            <S.CatalogTitle>Deals of the Day</S.CatalogTitle>

            <ProductList />

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
