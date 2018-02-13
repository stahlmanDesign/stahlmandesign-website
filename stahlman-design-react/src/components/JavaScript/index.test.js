import React from 'react';
import ReactDOM from 'react-dom';
import JavaScript from './JavaScript';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JavaScript />, div);
  ReactDOM.unmountComponentAtNode(div);
});
