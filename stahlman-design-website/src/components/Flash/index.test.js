import React from 'react';
import ReactDOM from 'react-dom';
import Flash from './Flash';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flash />, div);
  ReactDOM.unmountComponentAtNode(div);
});
