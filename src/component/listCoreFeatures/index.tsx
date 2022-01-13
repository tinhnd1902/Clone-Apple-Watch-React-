import React from 'react';
// import { ItemContainer} from './style';
import './index.css';
import ItemFeatures from '../itemContainer';
import { useSelector } from "../../redux/store"

const ListFeatures = () => {
  const { items, loading } = useSelector(state => state.featureReducer);
  if (loading) {
    return <div>Loading</div>
    console.log(loading)
  }
  return (
    <div className='single-item'>
      {
        items.map((lists, index) => {
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
