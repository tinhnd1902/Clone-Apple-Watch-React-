import React from 'react'
import { ContainerHome, HomeContent, CaptionImage, CaptionContent, HeroButton } from './style'

const Home = () => {
  return (
   <div>
      <ContainerHome>
      <HomeContent>
        <CaptionImage>
          <img src={require('../../assets/images/watch-1.png')} alt="Image Error" />
        </CaptionImage>
        <CaptionContent>
          <h1>Best Landing Page For Product Showcase</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
            Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium ligula.
          </p>
          <HeroButton>
            <button>Buy For $199</button>
            <button>More Info</button>
          </HeroButton>
        </CaptionContent>
      </HomeContent>
    </ContainerHome>
   </div>
  )
}

export default Home
