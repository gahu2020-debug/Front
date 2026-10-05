import { useState, useEffect } from "react"
import Navegación from "./Componentes/Navegación"
import Foot from "./Componentes/Foot" 
import Home from "./Views/home"
import About from "./Views/About"

function App() {
  const [path, setPath] = useState("inicio")
  const [View, setView] = useState(<Home />) 

  useEffect(() => {
    if (path === "inicio") {
      setView(<Home />)
    }
    if (path === "about") {
      setView(<About />)
    }
  }, [path]);

  return ( 
    <>
      <Navegación path={path} setPath={setPath} />
    
  <main className="flex min-h-screen flex-col">
    {View}
  </main>
  <Foot />
    </>
  )
}


export default App
