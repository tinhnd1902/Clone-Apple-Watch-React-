import React, { useState } from 'react';
import { useSelector } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { nextSlider, prevSlider } from '../../redux/feedBack/feedBackAction'
import { WrapCustomerFeedback, ContainerCustomerFeedback, UpCustomerFeedback, DownCustomerFeedback, SubDownCustomerFeedback } from './style';


const CustomerFeedback = () => {
  const { current, listCustomerFeedback } = useSelector(state => state.feedBackReducer)

  const dispatch = useDispatch()

  const handleNextSlider = () => {
    dispatch(nextSlider())
  }


  const handlePrevSlider = () => {
    dispatch(prevSlider())
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
          <button onClick={handlePrevSlider}><i className="fas fa-chevron-left"></i> </button>
          <button onClick={handleNextSlider}><i className="fas fa-chevron-right"></i> </button>
        </SubDownCustomerFeedback>
      </ContainerCustomerFeedback>
    </WrapCustomerFeedback>
  )
}

export default CustomerFeedback
