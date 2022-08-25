import { useContext } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { UserContext } from './contexts/UserContext';
import Users from './components/Users/Users';
import Books from './components/Books/Books';
import Messages from './components/Messages/Messages';
import MyBook from './components/MyBook/MyBook';
import NavBtn from './components/NavBtn/NavBtn';
import './App.css';

function App() {
  //const {loggedIn} = useContext(UserContext);

  return (
    <div className="App">
      <div className='content content_bgr'>
      <Routes>
          <Route path="/" element={<NavBtn/>}>
            <Route path="users" element={<Users />} />
            <Route path="books" element={<Books />} />
            <Route path="messages" element={<Messages/>}/>
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
