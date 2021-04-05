import React from 'react';
import IndexView from 'views/IndexView';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const IndexPage = (): JSX.Element => {
  return (
    <WithLayout
      component={IndexView}
      layout={Main}
    />
  )
};

export default IndexPage;
