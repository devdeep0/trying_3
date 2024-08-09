import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConnectWallet } from "@thirdweb-dev/react";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ConnectWallet />
     <div className='bg-red-400'>yes</div>
    </>
  )
}

export default App
