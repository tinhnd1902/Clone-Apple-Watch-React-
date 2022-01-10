import React from 'react';
// import { ItemContainer} from './style';
import './index.css';
import ItemFeatures from '../itemContainer';


const ListFeatures = () => {
  const listCoreFeatures = [
    {
      icon: "fas fa-globe",
      title: "GPRS Tracking",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-bell",
      title: "Notification Alart",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-video",
      title: "Instant Video Call",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-comment-alt",
      title: "User Live Chat",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fab fa-android",
      title: "Install Any App",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
    {
      icon: "fas fa-bullseye",
      title: "Attractive Design",
      content: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim."
    },
  ]
  return (
    <div className='single-item'>
       {
            listCoreFeatures.map((lists, index) => {
              return (
                // <ItemContainer key={index}>
                  <ItemFeatures icon={lists.icon} title={lists.title} content={lists.content}/>
              // </ItemContainer>
              )
            })
          }
    </div>
  )
}

export default ListFeatures
