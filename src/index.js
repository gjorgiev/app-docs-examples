import React from 'react';
import ReactDOM from 'react-dom';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import './index.css';
import NameForm from './NameForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NameForm />
    <EssayForm />
    <FlavorForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
