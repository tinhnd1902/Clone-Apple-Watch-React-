import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './page/menu'
import Home from './page/home';
import SubHome from './page/aboutWatch';
import Features from './page/coreFeatures';
import ProductDemo from './page/productDemo';
import WhyChooseOurProduct from './page/whyChooseOurProduct';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='header_banner'>
          <Menu />
          <Home />
        </div>
        <SubHome />
      </div>
      <div className='features'>
        <Features/>
      </div>
      <div>
        <ProductDemo/>
      </div>
      <div>
        <WhyChooseOurProduct/>
      </div>
    </div>
  );
}

export default App;
