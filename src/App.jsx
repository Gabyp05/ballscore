import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Results from "./pages/Results";
import Teams from "./pages/Teams";

function App() {

  return (
    <>
    <div className="bg-bgBlack w-full overflow-hidden">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
