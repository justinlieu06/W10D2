import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

// let clock = new Clock();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  // const element = ;
  ReactDOM.render(<Clock />, root);
});