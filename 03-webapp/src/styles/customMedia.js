import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    phone: '690px',
    tabPort: '856px',
    tabLand: '1096px',
    desktop: '1200px',
})

export default customMedia
