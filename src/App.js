import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import Register from "./components/SignUpPage";
import Dashboard from './components/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
