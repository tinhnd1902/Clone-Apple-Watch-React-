import React from 'react';
import { ItemContainer, ItemFeature } from './style';
import './index.css';

const ListFeatures = () => {
  const listCoreFeatures = [
    {
      icon: "fas fa-globe",
      tagH4: "GPRS Tracking",
      tagP: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-bell",
      tagH4: "Notification Alart",
      tagP: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-video",
      tagH4: "Instant Video Call",
      tagP: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-comment-alt",
      tagH4: "User Live Chat",
      tagP: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fab fa-android",
      tagH4: "Install Any App",
      tagP: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-bullseye",
      tagH4: "Attractive Design",
      tagP: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
  ]
  return (
    <div className='single-item'>
       {
            listCoreFeatures.map((lists, index) => {
              return (
                <ItemContainer key={index}>
                  <ItemFeature>
                    <i className={lists.icon}></i>
                    <h4>{lists.tagH4}</h4>
                    <p>{lists.tagP}</p>
                  </ItemFeature>
                </ItemContainer>
              )
            })
          }
    </div>
  )
}

export default ListFeatures
