import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";

import Home from "./pages/Home"

import '@ionic/react/css/core.css';
import './App.css';

import Insights from "./components/Insights";
import Ablog from "./components/Ablog";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import OurProfile from "./pages/OurProfile";
import News from "./components/News";
import Archives from "./components/Archives";
import OurHistory from "./pages/OurHistory";
import Blog from "./pages/Blog";


function App() {
  return (

      <BrowserRouter>
        
        <Routes>
        
        <Route path="/" element={<Home/>} />
         
          <Route path="events" element={<Events/>} />
          <Route path="Insights" element={<Insights/>} />
          <Route path="Ablog" element={<Ablog/>} />
          <Route path="Events" element={<Events/>} />
          <Route path="OurProfile" element={<OurProfile/>} />
          <Route path="News" element={<News/>} />
          <Route path="Archives" element={<Archives/>} />
          <Route path="Ablog" element={<Ablog/>} />
          <Route path="Blog" element={<Blog/>} />
          <Route path="OurHistory" element={<OurHistory/>} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
