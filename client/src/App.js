import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import CleanRoom from "./pages/cleanRoom"
import MiSeq from "./pages/miSeqWash"
import UpdateCleanRoom from "./pages/updateCleanRoom"
import UpdateMiSeq from "./pages/updateMiSeq"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cleanroom" element={<CleanRoom />} />
          <Route path="/miseqwash" element={<MiSeq />} />
          <Route path="/updatecleanroom" element={<UpdateCleanRoom />} />
          <Route path="/updatemiseq" element = {<UpdateMiSeq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
