
import React from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import {mystore} from './store/store';

const Ap = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};

export default Ap;
