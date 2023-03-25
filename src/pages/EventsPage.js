import React from 'react'
import Events from '../components/Events'
import { EventsDataProvider } from '../context/EventsContext'

function EventsPage() {
  return (
    <div>
        <EventsDataProvider>

        <Events/>
        </EventsDataProvider>



    </div>
  )
}

export default EventsPage;