import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import EventsContext from "../context/EventsContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Events = () => {
  const { eventsData } = useContext(EventsContext);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Articles eventsData={eventsData} />
      </main>

      <Footer />
    </>
  );
};

export default Events;

export const Articles = ({ eventsData }) => {
  return (
    <div id="articles" className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
        {eventsData.map((id) => (
          <div key={id.id} className="p-6">

            <img
              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src={id.eventImg}
              alt="blog"
            />
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              {id.date}
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              {id.title}
            </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">
              {id.details}
            </p>
            <div className="mt-4">
              <Link
                to={`/Article/${id.id}`}
                className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                title="read more"
              >
                Read More »
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
