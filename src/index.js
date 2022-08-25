import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {Parallax} from 'react-parallax';
import background2 from './images/background2.png'
import { ContextProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Parallax strength={-600} bgImage={background2} style={ {backgroundSize: 'cover'} }>
        <App />
      </Parallax>
    </BrowserRouter>
  </ContextProvider>
);

