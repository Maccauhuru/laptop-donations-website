import React, { Component } from 'react';
import Navigation from './Navigation';
import Showcase from './Showcase';
import LatestDonor from './LatestDonor';
import DonationReasons from './DonationReasons';
import Faq from './Faq';
import Join from './JoinForFree';
import Footer from './Footer';

 class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Showcase />
        <LatestDonor />
        <DonationReasons />
        <Faq />
        <Join />
        <Footer />
      </div>
    );
  };
};

export default App;