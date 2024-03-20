import CTA from "./components/CTA"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Resultados from "./components/Resultados"

function App() {

  return (
    <>
    <div className="bg-bgBlack w-full overflow-hidden">
      <Header />
      <Hero />
      <CTA />
      <Resultados />
    </div>
    </>
  )
}

export default App
