import * as S from './styled'

import Hero from 'components/Hero'
import Subscribe from 'components/Subscribe'
import Catalog from 'components/Catalog'

import { DataContext } from 'context/DataContext'
import { useContext } from 'react'

const Main = () => {
    const { bgImg } = useContext(DataContext)

    return (
        <S.MainWrapper className='u-mb-sm'>
            <Hero bgImg={bgImg} />

            <Catalog />

            <Subscribe />
        </S.MainWrapper>
    )
}

export default Main
