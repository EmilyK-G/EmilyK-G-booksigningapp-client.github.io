import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Users from './components/Users/Users';
import Books from './components/Books/Books';
import Messages from './components/Messages/Messages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="users" element={<Users />} />
        <Route path="books" element={<Books />} />
        <Route path="messages" element={<Messages/>}/>
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Route>
    </Routes>
  </BrowserRouter>
);

