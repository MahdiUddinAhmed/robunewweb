import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroBg, HeroContainer, VideoBG } from './HeroElements'

const HeroSection = () => {
return (
    <HeroContainer>
        <HeroBg>
            <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
    </HeroContainer>
)
}

export default HeroSection
