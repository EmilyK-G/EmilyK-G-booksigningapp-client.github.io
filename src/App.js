import Welcome from './components/Welcome/Welcome';
import NavBtn from './components/NavBtn/NavBtn';
import {Parallax} from 'react-parallax';
import background2 from './images/background2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax strength={-600} bgImage={background2}>
      <div className='content content_bgr'>
        
          <h2 className='text-content'>Reverse</h2>
          <Welcome />
          <NavBtn />
      </div>
      </Parallax>
    </div>
  );
}

export default App;
