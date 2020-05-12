import React from 'react';
import Allprojects from './Allprojects';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
          <Allprojects />
      </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});