import styled from 'styled-components'
import media from 'styles/breakpoints'

export const ProductListWrapper = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 4rem;
`

export const NoProductsAvailable = styled.p`
    font-size: 16px;
    color: var(--color-text-grey-medium);
    line-height: 21px;
    text-align: center;
`
