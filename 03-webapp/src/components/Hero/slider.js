import { Img } from './styled'

import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import images from './images'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => (
    <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={5000}
    >
        {images.map((image, index) => {
            return <Img key={index} data-src={image.src} />
        })}
    </AutoplaySlider>
)

export default Slider
