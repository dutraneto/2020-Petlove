import styled from 'styled-components'
import media from 'styles/breakpoints'

export const Hero = styled.section`
    height: 90vh;
    width: 100%;
    background: var(--color-primary);

    ${media.lessThan('tabLand')`
        max-height: 540px;
    `}
`

export const CarrouselWrapper = styled.article`
    position: relative;
    height: 100%;
    width: 100%;
`

export const CarrouselBtn = styled.button`
    position: absolute;
    top: 50%;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 4;
    -webkit-transform: translateY(-50%) rotate(-45deg);
    -ms-transform: translateY(-50%) rotate(-45deg);
    transform: translateY(-50%) rotate(-45deg);
    background-color: transparent;
    border: 2px solid var(--color-text-grey-lighter);
    cursor: pointer;
    -webkit-filter: opacity(0.5);
    filter: opacity(0.5);
    -webkit-transition: -webkit-filter 0.2s ease-in;
    transition: -webkit-filter 0.2s ease-in;
    -o-transition: filter 0.2s ease-in;
    transition: filter 0.2s ease-in;
    transition: filter 0.2s ease-in, -webkit-filter 0.2s ease-in;

    &:hover {
        -webkit-filter: opacity(0.9);
        filter: opacity(0.9);
    }

    &.left {
        left: 1rem;
        border-right: none;
        border-bottom: none;
    }

    &.right {
        right: 1rem;
        border-top: none;
        border-left: none;
    }
`

export const DescriptionWrapper = styled.div`
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 7vw;
    z-index: 3;
`

export const Title = styled.p`
    font-family: var(--font-monserrat);
    color: var(--color-white);
    font-size: 0.75rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: 1rem;
`

export const Description = styled.h1`
    font-family: var(--font-unna);
    font-size: 4rem;
    font-weight: 400;
    color: var(--color-white);
    word-break: break-word;
    line-height: 4rem;
    margin: 0;
    margin-bottom: 2rem;
    width: 80vmin;

    ${media.lessThan('phone')`
        font-size: 2.25rem;
        line-height: 2.5rem;

    `}
`

export const ShopBtn = styled.a`
    color: var(--color-white);
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.8rem 2.2rem;
    background-color: transparent;
    border: 2px solid var(--color-white);
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -ms-flex-item-align: start;
    align-self: flex-start;
    letter-spacing: 2px;

    &:hover {
        background-color: var(--color-white);
        color: currentColor;
    }
`

export const Carrousel = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
`

export const SlideList = styled.ul`
    position: relative;
    height: 100%;
    -webkit-transition: -webkit-transform ease-in-out 500ms;
    transition: -webkit-transform ease-in-out 500ms;
    -o-transition: transform ease-in-out 500ms;
    transition: transform ease-in-out 500ms;
    transition: transform ease-in-out 500ms, -webkit-transform ease-in-out 500ms;
`

export const Slide = styled.li`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
`

export const ImgWrapper = styled.picture``

export const Img = styled.img.attrs({
    loading: 'lazy',
    width: '1440',
    height: '700',
})`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const CarrouselNavigation = styled.div`
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    bottom: 5%;
    margin-left: 7vw;

    .current-slide {
        background-color: var(--color-text-grey-lighter);
    }
`

export const NavigationBtn = styled.button`
    width: 0.75rem;
    height: 0.75rem;
    background: transparent;
    border: 1px solid var(--color-text-grey-lighter);
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--color-text-grey-lighter);
    }

    &:not(:last-child) {
        margin-right: 10px;
    }
`
