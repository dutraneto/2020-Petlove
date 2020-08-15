import styled from 'styled-components'
import media from 'styles/breakpoints'

import { Menu } from '@styled-icons/ionicons-solid/Menu'

export const Header = styled.header`
    position: relative;
    z-index: 99;
`

export const Container = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: center;
`

export const Row = styled.div`
    position: absolute;
    width: 85%;
    padding: 1.9rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.lessThan('tabPort')`
        padding-top: 2rem;
        padding-bottom: 2rem;
    `}
`

export const IconMenuWrapper = styled.a.attrs({
    title: 'Click to open menu',
})`
    width: 30px;
    height: 30px;
    display: none;
    align-self: flex-end;

    ${media.lessThan('tabPort')`
        display: inline-block;
        align-self: center;
    `}
`

export const IconMenu = styled(Menu)`
    color: var(--color-white);
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: var(--color-secondary);
    }
`

/* simple nav */
/* .bg-stamp-green {
            background-image: url(../images/img-menu-bg.png);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: fixed;
            top: 0;
            width: 100%;
            box-shadow: 0 3px 5px var(--color-text-grey);
            z-index: 99;
        }

        */
