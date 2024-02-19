import { useEffect, useState } from 'react'
import './App.css'

import SandTHMinimalPairs from './components/SandTHMinimalPairs'
import Home from './components/Home';
import LandRMinimalPairs from './components/LandRMinimalPairs';
import BandPMinimalPairs from './components/BandPMinimalPairs';

function App() {

  const [view, setView]= useState('Home');
  const [viewHTML, setViewHTML] = useState(<></>);

  const components = {
    Home: ()=>{ return <Home setView={setView}/>},
    SAndTh: ()=>{ return <SandTHMinimalPairs setView={setView} />},
    LandR: ()=>{ return <LandRMinimalPairs setView={setView}/>},
    BandP: ()=>{ return <BandPMinimalPairs setView={setView}/>}
  }

  useEffect(()=>{
    setViewHTML(components[view]());
  },[view])
  

  return (
    <>
      <div>
        <h1>Come again?</h1>
        {viewHTML}
      </div>
    </>
  )
}

export default App
