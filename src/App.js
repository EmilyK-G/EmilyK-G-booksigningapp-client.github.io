import {
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
import { useUserContext } from "./Hooks/useUserContextHook";
import Users from './components/Users/Users';
import Books from './components/Books/Books';
import Messages from './components/Messages/Messages';
import Dashboard from './components/Dashboard/Dashboard';
import NavBtn from './components/NavBtn/NavBtn';
import MyBook from './components/MyBook/MyBook';
import LoginPage from "./pages/LoginPage/LoginPage";
import {AnimatePresence} from "framer-motion"; 
import './App.css';

function App() {
  const {user} = useUserContext();
  const location = useLocation();
  return (
    <div className="App">
      <div className='content d-flex justify-content-center content_bgr'>
        
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<NavBtn/>}>
                  <Route path="users" element={!user ? <Users /> : <Navigate to="/books"/>} />
                  <Route path="books" element={user ? <Books /> : <LoginPage/>} />
                  <Route path="books/:id" element={user ? <Messages/> : <LoginPage/>}/>
                  <Route path="dashboard" element={user ? <Dashboard/> : <LoginPage/>}/>
                  <Route path="my-book" element={user ? <MyBook/> : <LoginPage/>}/>
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
          </AnimatePresence>
       
      </div>
    </div>
  );
}

export default App;
