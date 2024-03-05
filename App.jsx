import { useState } from 'react'

import './App.css'

function App() {
 const [count,setCount] = useState(0);
 const increment = () =>{
  setCount(count + 1)
 }
 const decrement = () =>{
  setCount(count - 1)
 }

  return (
    <div className='wrapper'>
    <h1 className='header'>Hello {count}</h1> <br/>
    <div className='btn'>
      <button className='btn-1' onClick={increment}>add</button>
      <button className='btn-1' onClick={decrement}>subtract</button>
    </div>
</div>

  )
}

export default App
