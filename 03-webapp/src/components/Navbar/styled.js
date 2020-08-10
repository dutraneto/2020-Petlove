import styled from 'styled-components'
import media from 'styles/breakpoints'

export const Navbar = styled.nav`
    ${media.lessThan('tabPort')`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: fixed;
        top: 0;
        left: 70%;
        width: 30%;
        height: 100vh;
        z-index: 999;
        background: linear-gradient(to right, var(--color-primary), var(--color-background));
        text-align: center;
        padding: 2.5rem;
        transform: translateX(100%);
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.4);
    `}

    ${media.lessThan('phone')`
        left: 0;
        width: 100%;
        align-items: center;
    `}
`

export const LinkList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    ${media.lessThan('tabPort')`
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            height: 70vh;
            overflow-y: scroll;
            width: 100%;
    `}

    ${media.lessThan('phone')`
        align-items: center;
    `}
`

export const LinkItem = styled.li`
    margin-right: 2em;
    text-transform: uppercase;

    &:not(:last-child) {
        ${media.lessThan('phone')`
            margin-right: 0;
        `}

        ${media.lessThan('tabPort')`
            margin-bottom: 1rem;
        `}

        ${media.lessThan('tabLand')`
            margin-right: 1rem;
    `}
    }


`

export const Link = styled.a`
    color: var(--color-white);
    font-family: var(--font-monserrat);
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
        color: var(--color-secondary);
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
`

// &.open {
//     @include respond(tab-port) {
//         transition: all 0.3s ease-in-out;
//         transform: translateX(0);
//     }
// }

// &.close {
//     @include respond(tab-port) {
//         transition: all 0.3s ease-in-out;
//     }
// }

// a {
//     @include respond(phone) {
//         font-size: 1rem;
//     }
// }
