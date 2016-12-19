import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Goals from './components/goals';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Goals />, document.getElementById('app')
  )
})
