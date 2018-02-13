import React from 'react';
import ReactDOM from 'react-dom';
import ChooseLanguage from './ChooseLanguage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChooseLanguage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
