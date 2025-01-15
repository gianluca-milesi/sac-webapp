import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import Home from "./pages/Home.jsx"
import DettaglioViaggio from "./pages/DettaglioViaggio.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/travel/:id" element={<DettaglioViaggio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App