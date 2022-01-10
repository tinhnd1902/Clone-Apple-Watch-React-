import React from 'react';
import { ItemFeature, ItemContainer } from './style'
interface Props {
  icon: string,
  title: string,
  content: string
}
const ItemFeatures: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <ItemContainer>
      <ItemFeature>
        <i className={icon}></i>
        <h4>{title}</h4>
        <p>{content}</p>
      </ItemFeature>
    </ItemContainer>
  )
}

export default ItemFeatures
