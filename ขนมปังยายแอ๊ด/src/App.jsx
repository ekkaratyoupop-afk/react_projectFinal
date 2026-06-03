import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Registermember from "./Registermember"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registermember />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
