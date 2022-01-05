import React from 'react';
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

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='header_banner'>
          <Menu />
          <Home />
        </div>
     <AboutWatch />
      </div>
      <div className='features'>
        <Features />
      </div>
      <div>
        <ProductDemo />
      </div>
      <div>
        {/* <WhyChooseOurProduct /> */}
      </div>
      <div>
        {/* <OurProduct /> */}
      </div>
      <div>
        {/* <GetUpToDate /> */}
      </div>
      <div>
        {/* <CustomerFeedback /> */}
      </div>
      <div>
        {/* <FAQ /> */}
      </div>
      <div>
        {/* <NeedHelp /> */}
      </div>
      <div>
        {/* <Footer />  */}
      </div>
    </div>
  );
}

export default App;
