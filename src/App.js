import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
