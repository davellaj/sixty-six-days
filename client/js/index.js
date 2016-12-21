import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Goals from './components/goals';


console.log(`Client running in ${process.env.NODE_ENV} mode`);
// console.log(store.getState());

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider store={store}>
      <Goals />
    </Provider>,
    document.getElementById('app')
  )
})
