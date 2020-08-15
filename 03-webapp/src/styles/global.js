import { createGlobalStyle } from 'styled-components'
import media from './breakpoints'

const GlobalStyles = createGlobalStyle`

    /*
//////////////////////////////////////////
/ BASIC RESETS
*/
:root {
    /* Colors */
    --color-primary: #4d6863;
    --color-secondary: #d7fff1;
    --color-background: #4e6863;
    --color-text-grey-dark: #333;
    --color-text-grey: #989898;
    --color-text-grey-medium: #8d8d8d;
    --color-text-grey-lighter: #ebebeb;
    --color-white: #ffffff;
    --color-input: #998e76;
    --color-box-product: #25c682;

    /* Font-Families */
    --font-unna: 'Unna', sans-serif;
    --font-lato: 'Lato', sans-serif;
    // --font-monserrat: 'Montserrat', sans-serif;
}

* {
    margin: 0;
    padding: 0;

    &,
    &::before,
    &::after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
        /* inherited from HTML */
    }
}

html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-family: var(--font-lato);
    line-height: 1.6;
    color: var(--color-text-grey-dark);
}

a {
    &:link,
    &:visited {
        color: currentColor;
        text-decoration: none;
        &:active {
            color: currentColor;
        }
    }
}

ul,
ol,
li {
    list-style: none;
}

::-moz-selection {
    background-color: var(--color-primary);
    color: var(--color-white);
}

::selection {
    background-color: var(--color-primary);
    color: var(--color-white);
}

:focus {
    outline: 3px solid var(--color-box-product);
}

/* UTILS */
.u-m-md {
    margin: 5rem auto 5rem auto !important;
}
.u-mt-sm {
    margin-top: 0.6rem !important;
}

.u-mt-md {
    margin-top: 3.5rem !important;
}

.u-mt-lg {
    margin-top: 6.5rem !important;
}

.u-mb-xs {
    margin-bottom: 2.25rem !important;
}

.u-mb-sm {
    margin-bottom: 3.5rem !important;
}

.u-mb-md {
    margin-bottom: 5rem !important;
}

.u-mb-0 {
    margin-bottom: 0 !important;
}

.u-ml-sm {
    margin-left: 1.25rem !important;
}

.u-pd-sm {
    padding-left: 7vw !important;
    padding-right: 7vw !important;
}

.u-py-sm {
    padding-top: 0.1rem;
}

.u-mx-md {
    margin-left: 10vw !important;
    margin-right: 10vw !important;
}

.u-pos-absolute {
    position: absolute;
    width: 100%;
}

.u-box-shadow {
    box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.1);
}

.u-w-100 {
    width: 100%;
}

.hr {
    border: 0.5px solid var(--color-text-grey-lighter);
    margin: 0 auto;
}

.w-10 {
    width: 10%;
}

.u-d-flex {
    display: flex;
}

.u-justify-center {
    justify-content: center;
}

.menu-open {
    display: none;
    align-self: flex-end;

    ${media.lessThan('tabPort')`
        align-self: center;
        display: inline-block;
    `}

}

.menu-close {
    display: none;
    align-self: flex-end;

    ${media.lessThan('tabPort')`
        display: inline-block;
    `}
}

/* Screen reader only */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}

`

export default GlobalStyles
