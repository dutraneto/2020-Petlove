import styled from 'styled-components'
import media from 'styles/breakpoints'

export const LogoWrapper = styled.a``

export const Logo = styled.img`
    width: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    transition: all 0.2s;

    ${media.lessThan('tabLand')`
        width: 8.75rem;
        height: auto;
    `}
`
