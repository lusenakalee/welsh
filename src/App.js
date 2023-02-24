import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";

import Home from "./pages/Home"
import Events from "./pages/Events";
import '@ionic/react/css/core.css';
import './App.css';
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="profile" element={<ProfilePage/>} />
          <Route path="events" element={<Events/>} />
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
