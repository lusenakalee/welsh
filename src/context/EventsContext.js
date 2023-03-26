import React,{ useState, createContext } from 'react';
import { eventsData } from '../Data/EventsData';

const EventsContext = createContext(eventsData);

export  function EventsDataProvider  ({children})  {
    const [events, setEvents]  = useState(eventsData);

    return(
        <EventsContext.Provider
            value={{eventsData }}>
            {children}
        </EventsContext.Provider>
        
    );
};

export default EventsContext;



 
