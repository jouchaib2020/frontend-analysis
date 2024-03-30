
import { Route, Routes } from "react-router-dom"
import Charts from "./Pages/Charts"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Tables from "./Pages/Tables"

function App() {

  return (
    <>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/contact" element={<Charts />} />
    </Routes>
    </>
  )
}

export default App
