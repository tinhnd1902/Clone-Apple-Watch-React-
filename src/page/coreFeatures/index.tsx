import React from 'react'
import { ContainerFeatures, FeatureContent, CoreFeature} from './style'
import ListFeatures from '../../component/listCoreFeatures'

const Features = () => {
 
  return (
    <ContainerFeatures>
      <FeatureContent>
        <div className="content">
          <CoreFeature>
            <h5>Core Features</h5>
            <h2>Our product has lots of excellent core features for smart people.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
          </CoreFeature>
        </div>
        <div className='item'>
        <ListFeatures/>
        </div>
      </FeatureContent>
    </ContainerFeatures>
  )
}

export default Features


