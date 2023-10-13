import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import "./index.css";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/entrar" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
