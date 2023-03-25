import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "@ionic/react/css/core.css";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import Insights from "./components/Insights";
import Ablog from "./components/Ablog";
import Navbar from "./components/Navbar";
import Events from "../src/components/Events";
import OurProfile from "./pages/OurProfile";
import News from "./components/News";
import Archives from "./components/Archives";
import Blog from "./pages/Blog";
import Try from "./pages/Try";
import OurHistory from "./pages/OurHistory";
import EventsContextProvider from "./context/EventsContext";
import { eventsData } from "./Data/EventsData";
import EventsContext from "./context/EventsContext";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="Insights" element={<Insights />} />
        <Route path="Ablog" element={<Ablog />} />
        <Route path="Events" element={<Events />} />
        <Route path="OurProfile" element={<OurProfile />} />
        <Route path="OurHistory" element={<OurHistory />} />
        <Route path="News" element={<News />} />
        <Route path="Archives" element={<Archives />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Try" element={<Try />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
