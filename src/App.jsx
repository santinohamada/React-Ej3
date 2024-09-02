import { useState } from 'react'
import './App.css'
import Saludo from './components/Saludo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Saludo myFriend="my Friend" ></Saludo>
    </>
  )
}

export default App
