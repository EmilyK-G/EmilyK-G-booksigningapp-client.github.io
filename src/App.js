import { useState } from 'react';
import NavBtn from './components/NavBtn/NavBtn';
import {Parallax} from 'react-parallax';
import background2 from './images/background2.png'
import './App.css';

function App() {
  const [reload, setReload] = useState(true)
  
  return (
    <div className="App">
      <Parallax strength={-600} bgImage={background2}>
      <div className='content content_bgr'>
          <h2 className='text-content'>Welcome to the class of 2022!</h2>
          <NavBtn />
      </div>
      </Parallax>
    </div>
  );
}

export default App;
