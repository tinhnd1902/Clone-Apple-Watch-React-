import React from 'react'
// import logo from '../../assets/images/logo.png'
import { ContainerMenu, Logo, Nav } from './style'

const Menu = () => {
  return (
    <div className='abc'>
      <ContainerMenu>
        <Logo>
          {/* <img src={logo} alt="" /> */}
          <a href=""><img src={require('../../assets/images/logo.png')} alt="" /></a>
        </Logo>
        <Nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Faq</a></li>
            <li><a href="">Review</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </Nav>

      </ContainerMenu>
    </div>
  )
}

export default Menu

