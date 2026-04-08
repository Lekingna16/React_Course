import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilState } from 'recoil'
import { counterAtom } from './components/CounterA'

function App() {
 
  const [counter, setCounter] = useRecoilState(counterAtom)

  const handleIncrement = () => {
    setCounter (counter + 1)
  }
  const handleDecrement = () => {
    setCounter (counter > 0 ? counter - 1 : 0)
  }

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
