import React from "react";
import Ablog from "../components/Ablog";
import { EventsDataProvider } from "../context/EventsContext";
import { useLocation } from "react-router-dom";

function ArticlePage() {

  const location = useLocation();
  const id = location.pathname.split('/').pop();



  return (
    <div>
      <EventsDataProvider>
        <Ablog className='w-full' id={id} />
      </EventsDataProvider>
    </div>
  );
}

export default ArticlePage;
