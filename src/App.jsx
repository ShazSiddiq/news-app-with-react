import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Category from "./pages/Category";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header/>
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:id" element={<Category/>}/>
      </Routes>
      
    </div>
    </>
    
  );
}

export default App;
