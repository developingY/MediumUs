/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// import Input from '../../components/Input/index';
import Input from '../../components/Input/index';

export default function HomePage() {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Input placeholderName="Search Medium" />
    </>
  );
}
