import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import About from "./pages/about";
import Projects from "./pages/projects";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Home1 from "./pages/home1";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/" element={<Home1 />} />      
      </Routes>     
    
    </BrowserRouter>
  )
}