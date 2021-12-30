import React from 'react'
import { ContainerSubHome, SubHomeContent, CaptionContentSubHome,CaptionImageSubHome, HeroButtonSubHome, Div } from './style'

const SubHome = () => {
  return (
    <Div>
      <ContainerSubHome>
      <SubHomeContent>
      <CaptionImageSubHome>
      <div className="videos">
        <iframe width="500" height="650" src="https://www.youtube.com/embed/clXBiR01kUM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        </CaptionImageSubHome>
        <CaptionContentSubHome>
          <h5>Product Demo</h5>
          <h2>Watch the demo video for more information about our products.</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          </p>
          <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            <button>Visit Our Store</button>
        </CaptionContentSubHome>
     
      </SubHomeContent>
    </ContainerSubHome>
    </Div>
  )
}

export default SubHome  
