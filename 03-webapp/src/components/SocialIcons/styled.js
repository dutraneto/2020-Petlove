// .social-icons {
//     a {
//         &:not(:last-child) {
//             margin-right: 1.5rem;
//         }
//     }

//     svg {
//         width: 1.5rem;
//         height: 1.5rem;

//         &:hover {
//             opacity: 0.7;
//         }
//     }

//     &--facebook,
//     &--instagram,
//     &--twitter,
//     &--gplus {
//         fill: var(--color-text-grey-medium);
//     }
// }

import styled from 'styled-components'

export const SocialIconsWrapper = styled.div``

export const IconLink = styled.a.attrs({})`
    color: currentColor;
    transition: all 0.3s;
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    &:hover {
        opacity: 0.7;
    }
`

export const IconWrapper = styled.div.attrs({})`
    width: 32px;
    height: 32px;
    color: var(--color-text-grey-medium);
`

// export const IconHandbag = styled(Handbag)`
//     fill: var(--color-text-grey-medium);
//     transition: all 0.3s;

//     &:hover {
//         opacity: 0.7;
//     }
// `
