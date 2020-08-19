import styled from 'styled-components'
import media from 'styles/breakpoints'

export const CatalogWrapper = styled.section`
    max-width: 1440px;
`

export const CatalogTitle = styled.h2`
    margin-left: auto;
    margin-right: auto;
    max-width: 45vw;
    font-family: var(--font-unna);
    font-size: 3.875rem;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;

    ${media.lessThan('tabPort')`
        max-width: 70%;
    `}

    ${media.lessThan('phone')`
        font-size: 9vw;
        max-width: 100%;
    `}
`

export const Deals = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 4rem;

    ${media.lessThan('desktop')`
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        `}
`

export const CatalogShow = styled.div``

export const Show = styled.p`
    font-size: 0.75rem;
    margin: 1rem 0;
    text-align: center;
    color: var(--color-text-grey);
    text-transform: uppercase;
    -webkit-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.8;
    }
`
