import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./Components/Form";
import { Success } from "./Components/Success";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Thanks" element={<Success />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
