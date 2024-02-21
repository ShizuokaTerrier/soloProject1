import { useEffect, useState } from 'react'
import './App.css'

import SandTHMinimalPairs from './components/SandTHMinimalPairs'
import Home from './components/Home';
import LandRMinimalPairs from './components/LandRMinimalPairs';
import BandPMinimalPairs from './components/BandPMinimalPairs';
import CreateAccount from './components/CreateAccount';
import SyllableCountries from './components/SyllableCountries';
import Login from './components/Login';

function App() {

  const [view, setView]= useState('CreateAccount');
  const [viewHTML, setViewHTML] = useState(<></>);

  const components = {
    Home: ()=>{ return <Home setView={setView}/>},
    SAndTh: ()=>{ return <SandTHMinimalPairs setView={setView} />},
    LandR: ()=>{ return <LandRMinimalPairs setView={setView}/>},
    BandP: ()=>{ return <BandPMinimalPairs setView={setView}/>},
    SyllableCountries: ()=>{ return <SyllableCountries setView={setView}/>},
    CreateAccount: ()=>{ return <CreateAccount setView={setView}/>},
    Login: ()=>{ return <Login setView={setView}/>}
  }

  useEffect(()=>{
    setViewHTML(components[view]());
  },[view])
  

  return (
    <>
      <div>
        <h1>Listen Up</h1>
        {viewHTML}
      </div>
    </>
  )
}

export default App
