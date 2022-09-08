import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { SignatureContextProvider } from './contexts/SignatureContext';
import { NavigationContextProvider } from "./contexts/NavigationContext";
import Users from './components/Users/Users';
import Books from './components/Books/Books';
import Messages from './components/Messages/Messages';
import Dashboard from './components/Dashboard/Dashboard';
import NavBtn from './components/NavBtn/NavBtn';
import MyBook from './components/MyBook/MyBook';
import {AnimatePresence} from "framer-motion"; 
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className='content content_bgr'>
      <SignatureContextProvider>
        <NavigationContextProvider>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
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
          </AnimatePresence>
        </NavigationContextProvider>
      </SignatureContextProvider>
      </div>
    </div>
  );
}

export default App;
