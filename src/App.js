import {
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
import { NavigationContextProvider } from "./contexts/NavigationContext";
import { useUserContext } from "./Hooks/useUserContextHook";
import Users from './components/Users/Users';
import Books from './components/Books/Books';
import Messages from './components/Messages/Messages';
import Dashboard from './components/Dashboard/Dashboard';
import NavBtn from './components/NavBtn/NavBtn';
import MyBook from './components/MyBook/MyBook';
import {AnimatePresence} from "framer-motion"; 
import './App.css';

function App() {
  const {user} = useUserContext();
  const location = useLocation();
  return (
    <div className="App">
      <div className='content content_bgr'>
        <NavigationContextProvider>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<NavBtn/>}>
                  <Route path="users" element={!user ? <Users /> : <Navigate to="/books"/>} />
                  <Route path="books" element={user ? <Books /> : <Navigate to="/"/>} />
                  <Route path="books/:id" element={user ? <Messages/> : <Navigate to="/"/>}/>
                  <Route path="dashboard" element={user ? <Dashboard/> : <Navigate to="/"/>}/>
                  <Route path="my-book" element={user ? <MyBook/> : <Navigate to="/"/>}/>
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
        </NavigationContextProvider>
      </div>
    </div>
  );
}

export default App;
