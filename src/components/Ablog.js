import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Ablog = () => {
  const { eventsData } = useContext(EventsContext);
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === id);

  if (!event) {
    return <div>loading</div>;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="pl-20 pt-10">
        <Breadcrumbs>
          <Link smooth to="/" className="opacity-60">
            Home Page
          </Link>
          <Link smooth to="/Events" className="opacity-60">
            Events
          </Link>
          <a href="#">Article</a>
        </Breadcrumbs>
      </div>

      <main className="pt-8 pb-16 lg:pt-16  w-full justify-items-center lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between  px-4 mx-auto max-w-screen-xl ">
          <article key={event.id} className="   format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={event.authorImg}
                    alt="author image"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {event.authorName}
                    </a>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      {event.authorTitle}
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        {event.date}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {event.title}
              </h1>
            </header>
            <p className="lead  ">{event.details}</p>
            <p className="text-lg  mb-4 pb-4">{event.storyParagraph1}</p>

            <figure>
              <img alt="event image" src={event.eventImg} />

              <figcaption>{event.refesences}</figcaption>
            </figure>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Ablog;
