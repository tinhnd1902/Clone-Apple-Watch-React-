import React from 'react';
import { WrapCustomerFeedback, ContainerCustomerFeedback, UpCustomerFeedback, DownCustomerFeedback, SubDownCustomerFeedback } from './style';

const CustomerFeedback = () => {
  return (
    <WrapCustomerFeedback>
      <ContainerCustomerFeedback>
        <UpCustomerFeedback>
          <div className="contentUp">
            <h5>Customer Feedback</h5>
            <h2>Our Clients valuable reviews about our products and service</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
          </div>
        </UpCustomerFeedback>
        <DownCustomerFeedback>
          <div className="contentDown">
            <div className="client-img">
              <img src={require("../../assets/images/client-1.jpg")} alt="" />
            </div>
            <div className="client-comnt">
              <h5>Laboriosam libero, aliquam magnam debitis exercitationem doloribus quo repellat aperiam doloremque aut, optio ab modi, itaque maiores labore.</h5>
              <span>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <h4>- Shane Kyle</h4>
              <p>affiliate marketer</p>
            </div>
            <div className="client-details"></div>
          </div>
        </DownCustomerFeedback>
        <SubDownCustomerFeedback>
          {/* <div className="button_group"> */}
          <button><i className="fas fa-chevron-left"></i> </button>
          <button><i className="fas fa-chevron-right"></i> </button>
          {/* </div> */}
        </SubDownCustomerFeedback>
      </ContainerCustomerFeedback>
    </WrapCustomerFeedback>
  )
}

export default CustomerFeedback
