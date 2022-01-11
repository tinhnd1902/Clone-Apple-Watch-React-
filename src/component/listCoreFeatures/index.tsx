import React from 'react';
// import { ItemContainer} from './style';
import './index.css';
import ItemFeatures from '../itemContainer';
import { useSelector } from "../../redux/store"

const ListFeatures = () => {
  const listCoreFeatures = useSelector(state => state.featureReducer.listCoreFeatures);

  return (
    <div className='single-item'>
      {
        listCoreFeatures.map((lists, index) => {
          return (
            // <ItemContainer key={index}>
            <ItemFeatures icon={lists.icon} title={lists.title} content={lists.content} />
            // </ItemContainer>
          )
        })
      }
    </div>
  )
}

export default ListFeatures
