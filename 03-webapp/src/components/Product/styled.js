import styled from 'styled-components'
import media from 'styles/breakpoints'

export const ProductWrapper = styled.figure`
    min-width: 33.333333%;
    height: auto;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    ${media.lessThan('desktop')`
        min-width: 40%;
    `}

    &:hover {
        opacity: 0.8;
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
    }
`

export const ProductLink = styled.a`
    display: block;
`

export const ProductImg = styled.img.attrs({
    loading: 'lazy',
    width: '350',
    height: '370',
})`
    max-width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;

    ${media.lessThan('desktop')`
    width: 100%;
    `}
`

export const ProductDescription = styled.figcaption``

export const ProductTitle = styled.h3`
    position: relative;
    font-family: var(--font-unna);
    text-transform: capitalize;
    font-size: 1.375rem;
    font-weight: 400;
`

export const ProductPrice = styled.p`
    position: relative;
    font-size: 0.875rem;
    color: var(--color-text-grey);
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
`
