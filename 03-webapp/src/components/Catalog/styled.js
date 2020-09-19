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

export const CatalogShow = styled.div``
