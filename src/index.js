import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import {Parallax} from 'react-parallax';
import signingBackground from './images/signingBackground2.png'
import { UserContextProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <Parallax strength={-600} bgImage={signingBackground} style={ {backgroundSize: 'cover'} }>
        <App />
      </Parallax>
    </BrowserRouter>
  </UserContextProvider>
);

