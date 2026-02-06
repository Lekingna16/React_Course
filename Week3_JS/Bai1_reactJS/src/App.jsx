import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [info, setInfo] = useState({name:"", email: "abc", age: 0})

  function updateName () {
   
    const name = document.getElementById('name').value 
  
    setInfo(previousState => {
    return { ...previousState, name: name }
  });

}
  
  

  return (
    <>
     
     
       <label htmlFor="">Name</label>
      <input type="text" id="name" />
      <br />
     <label htmlFor="">Email</label>
      <input type="text" id="email" />
      <br />
     <label htmlFor="">Age</label>
      <input type="text" id="age" />

      <button onClick={updateName}>Click</button>
     
      
     
    </>
  )
}


export default App
