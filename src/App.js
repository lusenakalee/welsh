import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "@ionic/react/css/core.css";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import Insights from "./components/Insights";

import Navbar from "./components/Navbar";
import Events from "../src/components/Events";
import OurProfile from "./pages/OurProfile";
import News from "./components/News";
import Archives from "./components/Archives";
import Blog from "./pages/Blog";

import OurHistory from "./pages/OurHistory";
import EventsContextProvider from "./context/EventsContext";
import { eventsData } from "./Data/EventsData";
import EventsContext from "./context/EventsContext";
import EventsPage from "./pages/EventsPage";
import ArticlePage from "./pages/ArticlePage";
import Ablog from "./components/Ablog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="Insights" element={<Insights />} />
        <Route path="/Article/:id" element={<ArticlePage />} />
        <Route path="Ablog" element={<Ablog />} />
        <Route path="Events" element={<EventsPage />} />
        <Route path="OurProfile" element={<OurProfile />} />
        <Route path="OurHistory" element={<OurHistory />} />
        <Route path="News" element={<News />} />
        <Route path="Archives" element={<Archives />} />
        <Route path="Blog" element={<Blog />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
