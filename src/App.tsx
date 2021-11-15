import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
