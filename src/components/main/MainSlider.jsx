import React from 'react'
import { CCarousel, CCarouselItem, CCarouselCaption,CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import '../../styles/main/MainSlider.scss'
import slide1 from '../../assets/slider/background.jpg'
import slide2 from '../../assets/slider/background9.jpg'
import slide3 from '../../assets/slider/background4.jpg'

const MainSlider = () => {

    return (
        <div className='slider__container'>
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="imageContainer" src={slide1} alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="imageContainer" src={slide2} alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="imageContainer" src={slide3} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </div>
    )
}

export default MainSlider
