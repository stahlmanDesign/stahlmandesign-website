import React from 'react';
import ReactDOM from 'react-dom';
import Journalism from './Journalism';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Journalism />, div);
  ReactDOM.unmountComponentAtNode(div);
});
