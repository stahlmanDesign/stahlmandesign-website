import React from 'react';
import ReactDOM from 'react-dom';
import ImagesMarkup from './ImagesMarkup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImagesMarkup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
