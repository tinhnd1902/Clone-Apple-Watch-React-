import React, { useState } from 'react';
import { WrapCustomerFeedback, ContainerCustomerFeedback, UpCustomerFeedback, DownCustomerFeedback, SubDownCustomerFeedback } from './style';
import anh1 from '../../assets/images/client-1.jpg';
import anh2 from '../../assets/images/client-2.jpg';
import anh3 from '../../assets/images/client-3.jpg';


const CustomerFeedback = () => {

  const listCustomerFeedback = [
    {
      avatar: anh1,
      content: "Laboriosam libero, aliquam magnam debitis exercitationem doloribus quo repellat aperiam doloremque aut, optio ab modi, itaque maiores labore.",
      name: "- Adam Smith",
      lever: "product marketer",
    },
    {
      avatar: anh2,
      content: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis.",
      name: "- Shane Kyle",
      lever: "affiliate marketer",
    },
    {
      avatar: anh3,
      content: "Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi, itaque maiores labore.",
      name: "- Micheal Jonson",
      lever: "product manager",
    }
  ]

  const [current, setCurrent] = useState(0);
  const length = listCustomerFeedback.length;

  const nextSlider = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }


  const prevSlider = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  // if(!Array.isArray(listCustomerFeedback) || listCustomerFeedback.length <=0){
  //  return null;
  // }

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
          {
            listCustomerFeedback.map((lists, index) => {
              return (
                <>
                  {index === current && (<div className={index === current ? 'contentDown active' : 'contentDown'} key={index}>
                    <div className="client-img">
                      <img src={lists.avatar} alt="" />
                    </div>
                    <div className="client-comnt">
                      <h5>{lists.content}</h5>
                      <span>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                      <h4>{lists.name}</h4>
                      <p>{lists.lever}</p>
                    </div>
                    <div className="client-details"></div>
                  </div>)}
                </>
              )
            })
          }
        </DownCustomerFeedback>
        <SubDownCustomerFeedback>
          <button onClick={prevSlider}><i className="fas fa-chevron-left"></i> </button>
          <button onClick={nextSlider}><i className="fas fa-chevron-right"></i> </button>
        </SubDownCustomerFeedback>
      </ContainerCustomerFeedback>
    </WrapCustomerFeedback>
  )
}

export default CustomerFeedback
