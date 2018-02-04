import React from 'react';
import ReactDOM from 'react-dom';
import En5Minutes from './En5Minutes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<En5Minutes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
