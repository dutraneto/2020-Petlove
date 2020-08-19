import styled from 'styled-components'
import media from 'styles/breakpoints'

const ProductListWrapper = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 4rem;

    ${media.lessThan('desktop')`
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        `}
`

export default ProductListWrapper
