import { useEffect, useState } from 'react'
import './App.css'

import SandTHMinimalPairs from './components/SandTHMinimalPairs'
import Home from './components/Home';

function App() {

  const [view, setView]= useState('Home');
  const [viewHTML, setViewHTML] = useState(<></>);

  const components = {
    Home: ()=>{ return <Home setView={setView}/>},
    sAndTh: ()=>{ return <SandTHMinimalPairs setView={setView} />}
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
