import React from 'react';
import Layout from '../Layout/Layout';

import Banner from './Banner';
import AboutHt from './AboutHt';
import About from './About';
import Services from './Services';
import MyExpertise from './MyExpertise';

function Home() {
  return (
  
    <Layout>
      <Banner/>
      {/* <AboutHt/> */}
       <Services/>
       <MyExpertise/>
     
    </Layout>
  );
}

export default Home;
