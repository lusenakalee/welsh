import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "@ionic/react/css/core.css";
import "./App.css";

import ProfilePage from "./pages/ProfilePage";
import OurProfile from "./pages/OurProfile";

import OurHistory from "./pages/OurHistory";
import EventsPage from "./pages/EventsPage";
import ArticlePage from "./pages/ArticlePage";
import Ablog from "./components/Ablog";
import InsightsPage from "./pages/InsightsPage";
import Feed from "./components/Feed";
import RssArticles from "./components/RssArticles";
import CacheBuster from "react-cache-buster";
import version from "../package.json";

function App() {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      metaFileDirectory={"."} //If public assets are hosted somewhere other than root on your server.
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="Insights" element={<InsightsPage />} />
          <Route path="/Article/:id" element={<ArticlePage />} />
          <Route path="Ablog" element={<Ablog />} />
          <Route path="Events" element={<EventsPage />} />
          <Route path="OurProfile" element={<OurProfile />} />
          <Route path="OurHistory" element={<OurHistory />} />
          <Route path="Rssarticles" element={<RssArticles />} />

          <Route path="Feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </CacheBuster>
  );
}

export default App;
