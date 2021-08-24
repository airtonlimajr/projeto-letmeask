import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from './components/Button';
import './services/firebase';
import './styles/global.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button text="Botão 1"/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


