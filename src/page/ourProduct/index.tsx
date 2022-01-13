import React from 'react'
import { WrapOurProduct, ContainerOurProduct, UpOurProduct, DownOurProduct } from './style';
import ListOurProduct from '../../component/listOurProduct';

const OurProduct = () => {


  return (
    <WrapOurProduct>
      <ContainerOurProduct>
        <UpOurProduct>
          <div className="upContent">
            <h5>Our Product</h5>
            <h2>We have lots of excellent and high quality products. Check now</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
          </div>
        </UpOurProduct>
        <DownOurProduct>
          <div className="downContent">
            <ListOurProduct />
          </div>
        </DownOurProduct>
      </ContainerOurProduct>
    </WrapOurProduct>
  )
}

export default OurProduct

