import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import './App.css'
import AISearch from './search/AISearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Routes>

    
      <Route element={<AISearch/>} path={'/'} exact={true}/>
    </Routes>

    
    
    
    
    </BrowserRouter>


    
    </>
  )
}

export default App
