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

export const LinkList = styled.ul``

export const LinkItem = styled.li``

export const Link = styled.a``

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
