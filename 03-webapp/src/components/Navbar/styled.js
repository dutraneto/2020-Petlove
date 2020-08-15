import styled from 'styled-components'
import media from 'styles/breakpoints'
import { Handbag } from '@styled-icons/bootstrap/Handbag'
import { Close } from '@styled-icons/evaicons-solid/Close'

export const NavbarWrapper = styled.nav`
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

    &.open {
        ${media.lessThan('tabPort')`
            transform: translateX(0);
            transition: all 0.3s ease-in-out;
        `}
    }
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
    color: var(--color-white);

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

        ${media.lessThan('tabPort')`
            margin-right: 0;
        `}
    }

`
export const Link = styled.a`
    font-family: var(--font-monserrat);
    font-weight: 500;
    font-size: 0.75rem;
    letter-spacing: 1px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;

    ${media.lessThan('phone')`
            font-size: 1rem;
        `}

    &:hover {
        color: var(--color-secondary);
        -webkit-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
`

export const IconWrapper = styled.div.attrs({
    title: 'Click here to go to shop cart',
})`
    width: 25px;
    height: 25px;
`

export const IconHandbag = styled(Handbag)`
    fill: var(--color-white);
    transition: all 0.3s;

    &:hover {
        fill: var(--color-secondary);
    }
`

export const IconMenuWrapper = styled.a.attrs({
    title: 'Click to close menu',
})`
    width: 30px;
    height: 30px;
    display: none;
    align-self: flex-end !important;

    ${media.lessThan('tabPort')`
        display: inline-block;
        align-self: center;
    `}
`

export const IconCloseMenu = styled(Close)`
    color: var(--color-white);
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: var(--color-secondary);
    }
`
