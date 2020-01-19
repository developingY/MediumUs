/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import messages from './messages';
import { WidthConstrainWrapper, SideWrapper } from './Wrappers';
import Header from './Header';
import MainHero from './MainHero';
import HeroList from './HeroList';
import Sidebars from './Sidebars';
import Navbar from './Navbar';

function HomePage() {
  return (
    <>
      <WidthConstrainWrapper>
        {/* <h1>
        <FormattedMessage {...messages.header} />
      </h1> */}
        <Header />
      </WidthConstrainWrapper>
      <Navbar />
      <WidthConstrainWrapper>
        <MainHero />
        <SideWrapper>
          <HeroList list="homeList" />
          <Sidebars />
        </SideWrapper>
      </WidthConstrainWrapper>
    </>
  );
}

export default HomePage;
