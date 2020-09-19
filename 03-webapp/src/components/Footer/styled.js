import styled from 'styled-components'
import media from 'styles/breakpoints'

export const Footer = styled.footer`
    background: var(--color-white);
`
export const FooterWrapper = styled.div``

export const Deliveries = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 7vw;

    ${media.lessThan('tabLand')`
        padding: 0;
    `}

    ${media.lessThan('phone')`
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    `}

    .borders {
        border-left: 1px solid var(--color-text-grey-medium);
        border-right: 1px solid var(--color-text-grey-medium);
        -ms-flex-item-align: stretch;
        -ms-grid-row-align: stretch;
        align-self: stretch;

        ${media.lessThan('phone')`
        border: none;
        `}
    }
`

export const InfoWrapper = styled.div`
    min-width: 33.333333%;
    height: auto;
    text-align: center;

    ${media.lessThan('phone')`
        width: 100%;
    `}
`

export const Info = styled.h5`
    display: block;
    text-transform: uppercase;
    margin: 8px 0;
    font-size: 13px;
    line-height: 30px;
    font-weight: 700;
`

export const Details = styled.p`
    font-size: 14px;
    color: var(--color-text-grey-medium);
    line-height: 21px;
    margin-bottom: 1rem;
`

export const HRWrapper = styled.div``

export const HR = styled.hr``

export const SocialWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 7vw;

    ${media.lessThan('tabLand')`
        padding: 0;
    `}

    ${media.lessThan('phone')`
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    `}
`

export const FollowUs = styled.div`
    min-width: 33.333333%;
    height: auto;
    text-align: center;

    ${media.lessThan('phone')`
        width: 100%;
        margin-bottom: 3rem;
    `}
`

export const LogoWrapper = styled.div`
    min-width: 33.333333%;
    height: auto;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    ${media.lessThan('phone')`
        width: 100%;
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    `}
`

export const LogoLink = styled.a.attrs({
    title: 'Click to go to homepage',
})``

export const LogoBlack = styled.img.attrs({
    src: 'images/petlove-logo-black.png',
    loading: 'lazy',
    width: '140',
    height: '32',
    alt: 'Footer logo black color',
})`
    width: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    transition: all 0.2s;
`

export const ContactWrapper = styled.div`
    min-width: 33.333333%;
    height: auto;
    text-align: center;

    ${media.lessThan('phone')`
        width: 100%;
        margin-bottom: 3rem;
    `}
`

export const ContactForm = styled.form``

export const SignupWrapper = styled.div`
    position: relative;
    padding: 0 1.5rem;

    ${media.lessThan('tabPort')`
        padding: 0;
    `}
`

export const SignupLabel = styled.label`
    display: block;
    text-transform: uppercase;
    margin: 8px 0;
    font-size: 13px;
    line-height: 30px;
    font-weight: 700;
`

export const SignupControl = styled.input`
    width: 100%;
    height: 2.8rem;
    padding-left: 8px;
    border: 1px solid var(--color-text-grey-lighter);
    border-radius: 0;
    -webkit-appearance: none;
    font-size: 16px;
    background-color: var(--color-white);
    color: var(--color-primary);
`
