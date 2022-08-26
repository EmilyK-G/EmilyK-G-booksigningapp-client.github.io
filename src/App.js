import { useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from './contexts/UserContext';
import Users from './components/Users/Users';
import Books from './components/Books/Books';
import Messages from './components/Messages/Messages';
import Dashboard from './components/Dashboard/Dashboard';
import NavBtn from './components/NavBtn/NavBtn';
import MyBook from './components/MyBook/MyBook';
import './App.css';

function App() {
  const [myPath, setMyPath] = useState('');
  const {loggedUser} = useContext(UserContext);
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   setMyPath(`books/${loggedUser.Id}`)
  // }, [loggedUser.Id])
  

  return (
    <div className="App">
      <div className='content content_bgr'>
      <Routes>
          <Route path="/" element={<NavBtn/>}>
            <Route path="users" element={<Users />} />
            <Route path="books" element={<Books />} />
            <Route path="books/:id" element={<Messages/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="my-book" element={<MyBook/>}/>
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
      </div>
    </div>
  );
}

export default App;
