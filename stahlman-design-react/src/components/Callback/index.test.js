import React from 'react';
import ReactDOM from 'react-dom';
import Callback from './Callback';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Callback />, div);
  ReactDOM.unmountComponentAtNode(div);
});
