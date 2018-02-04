import React from 'react';
import ReactDOM from 'react-dom';
import NavigationMenu from './NavigationMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavigationMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
