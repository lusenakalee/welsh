import React,{  createContext } from 'react';
import { eventsData } from '../Data/EventsData';

const EventsContext = createContext(eventsData);

export  function EventsDataProvider  ({children})  {

    return(
        <EventsContext.Provider
            value={{eventsData }}>
            {children}
        </EventsContext.Provider>
        
    );
};

export default EventsContext;



 
