import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import NavBtn from './components/NavBtn/NavBtn';
import {Parallax} from 'react-parallax';
import background2 from './images/background2.png'
import './App.css';

function App() {
  const [firstPage, setFirstPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/'){
      setFirstPage(true)
    } else {
      setFirstPage(false)
    }
    console.log(location.pathname)
  }, [location])
  
  return (
    <div className="App">
      <Parallax strength={-600} bgImage={background2}>
      <div className='content content_bgr'>
      {firstPage && <Welcome />}
          <NavBtn />
      </div>
      </Parallax>
    </div>
  );
}

export default App;
