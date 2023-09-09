import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
