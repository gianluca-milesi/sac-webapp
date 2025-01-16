import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import Home from "./pages/Home.jsx"
import DettaglioViaggio from "./pages/DettaglioViaggio.jsx"
import GlobalContext from "./contexts/GlobalContext.js"
import viaggi from "./data/viaggi.js"
import { useState } from "react"

function App() {

  const [newViaggi, setNewViaggi] = useState(viaggi)

  return (
    <GlobalContext.Provider value={{ newViaggi, setNewViaggi }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/travel/:id" element={<DettaglioViaggio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App