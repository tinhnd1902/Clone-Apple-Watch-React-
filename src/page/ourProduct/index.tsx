import React from 'react'
import { WrapOurProduct,ContainerOurProduct, UpOurProduct, DownOurProduct} from './style'

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
            <div className="singleContent">
              <img src={require('../../assets/images/product-1.jpg')} alt="" />
              <div className="subContent">
                <h4>Olimus Blue</h4>
                <h5>$188.00</h5>
                <a href="">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
            
            <div className="singleContent">
              <img src={require('../../assets/images/product-2.jpg')} alt="" />
              <div className="subContent">
                <h4>Amexso Black</h4>
                <h5>$220.00</h5>
                <a href="">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

            <div className="singleContent">
              <img src={require('../../assets/images/product-3.jpg')} alt="" />
              <div className="subContent">
                <h4>Latexo Green</h4>
                <h5>$350.00</h5>
                <a href="">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>

          <div className="downContent">
            <div className="singleContent">
              <img src={require('../../assets/images/product-4.jpg')} alt="" />
              <div className="subContent">
                <h4>Glasgox Green</h4>
                <h5>$199.00</h5>
                <a href="">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>
            
            <div className="singleContent">
              <img src={require('../../assets/images/product-3.jpg')} alt="" />
              <div className="subContent">
                <h4>Amelia Blue</h4>
                <h5>$250.00</h5>
                <a href="">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

            <div className="singleContent">
              <img src={require('../../assets/images/product-1.jpg')} alt="" />
              <div className="subContent">
                <h4>Alimax Pink</h4>
                <h5>$299.00</h5>
                <a href="">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
              </div>
            </div>

          </div>
        </DownOurProduct>
      </ContainerOurProduct>
    </WrapOurProduct>
  )
}

export default OurProduct
