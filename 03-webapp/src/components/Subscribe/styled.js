import styled from 'styled-components'
import media from 'styles/breakpoints'

export const SubscribeWrapper = styled.section`
    width: 100%;
    background-color: var(--color-background);
`

export const FormGroup = styled.form`
    padding: 2rem 15%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
    max-width: 1440px;
    margin: 0 auto;

    ${media.lessThan('tabLand')`
        padding-left: 0;
        padding-right: 0;
    `}

    ${media.lessThan('phone')`
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    `}
`

export const Label = styled.label`
    font-family: var(--font-unna);
    font-weight: 400;
    color: var(--color-white);
    font-size: 1.8rem;
    cursor: pointer;
`

export const FormControl = styled.input`
    padding: 1rem 1.25rem;
    border: none;
    font-size: 1rem;
    background-color: var(--color-white);
    color: var(--color-primary);
    -ms-flex-item-align: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
    -webkit-box-flex: 3;
    -ms-flex-positive: 3;
    flex-grow: 3;
    margin-left: 3.5rem;
    margin-right: 8px;

    ${media.lessThan('phone')`
        margin: 0 0 15px 0;
    `}
`

export const SubscribeBtn = styled.button`
    width: 9.6rem;
    min-height: 2.75rem;
    font-size: 0.75rem;
    font-weight: 700;
    border: none;
    background-color: var(--color-white);
    -ms-flex-item-align: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
    cursor: pointer;
    color: #a99f8c;
    text-transform: uppercase;
    letter-spacing: 1px;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
        -webkit-filter: opacity(0.9);
        filter: opacity(0.9);
    }

    ${media.lessThan('phone')`
        width: 100%;
    `}
`
