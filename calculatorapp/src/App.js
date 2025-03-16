import {BrowserRouter,Routes,Route} from"react-router-dom"
import Home from "./Pages/Homepage/Home";
import Navbar from "./Navebar";


export default function App() {
 
  return (
   <BrowserRouter>
     <Navbar/>
   <Routes>
  
    <Route path="/" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  );
}

