import * as S from './styled'

import Hero from 'components/Hero'

import { DataContext } from 'context/DataContext'
import { useContext } from 'react'

const Main = () => {
    const { bgImg } = useContext(DataContext)

    return (
        <S.MainWrapper className='u-mb-sm'>
            <Hero bgImg={bgImg} />

            <section className='catalog u-m-md'>
                <h2>Deals of the Day</h2>

                <div id='catalog' className='catalog__deals'>
                    {/* cards */}
                </div>
                <div className='catalog__show u-pd-sm'>
                    <hr className='hr' />
                    <a href='#'>
                        <p id='show'>show all</p>
                    </a>
                    <hr className='hr' />
                </div>
            </section>
        </S.MainWrapper>
    )
}

export default Main
