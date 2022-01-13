import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import Menu from './page/menu'
import Home from './page/home';
import AboutWatch from './page/aboutWatch';
import Features from './page/coreFeatures';
import ProductDemo from './page/productDemo';
import WhyChooseOurProduct from './page/whyChooseOurProduct';
import OurProduct from './page/ourProduct';
import GetUpToDate from './page/getUpToDate';
import CustomerFeedback from './page/customerFeedback';
import FAQ from './page/FAQ';
import NeedHelp from './page/needhelp';
import Footer from './page/footer';

import { getListFeature } from './redux/features/featureAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListFeature());
  }, [])

  return (
    <div className="App">
      <div className='header_banner'>
        <Menu />
        <Home />
      </div>
      <AboutWatch />
      <div className='features'>
        <Features />
      </div>
      <ProductDemo />
      <WhyChooseOurProduct />
      <OurProduct />
      <GetUpToDate />
      <FAQ />
      <CustomerFeedback />
      <NeedHelp />
      <Footer />
    </div>
  );
}

export default App;
