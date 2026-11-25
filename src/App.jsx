import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      <h1 style={{ color: "red", fontSize: "35px", textAlign: "center" }}>
        Welcome to my portfolio
      </h1>

      <p className="text-gray-500 text-lg text-center">
        This is my first React project using Vite and Tailwind CSS.
      </p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </>
  )
}

export default App