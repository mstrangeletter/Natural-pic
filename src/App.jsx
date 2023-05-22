import "./index.css";

import { Routes, Route, BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favoritos from "./components/Favoritos";
import { Provider } from "./Context";

export default function App() {
  return (
    <div className="App">
      <Provider>
        
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
