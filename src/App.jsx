import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([])
  const [item, setItem] = useState("")

  const addToList = () => {
    setList([...list, item])
  }

  return (
    <div>
      <p>{item}</p>

      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        placeholder="Item"
      />

      <button onClick={addToList}>Add</button>
    </div>
  )
}

export default App