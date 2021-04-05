import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { BlogNewsroom } from '../src/views';

const IndexPage = (): JSX.Element => {
  return (
    <WithLayout
      component={BlogNewsroom}
      layout={Main}
    />
  )
};

export default IndexPage;
