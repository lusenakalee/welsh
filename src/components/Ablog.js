import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './Ablog.css'

const Ablog = () => {
  const { eventsData } = useContext(EventsContext);
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === id);

  if (!event) {
    return <div>loading</div>;
  }

  return (
    <div>
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
          <a>Article</a>
        </Breadcrumbs>
      </div>

      <main className="pt-8 pb-16 lg:pt-16  mx-auto px-4 lg:px-8 justify-items-center lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between  px-auto mx-auto px-4 lg:px-8 ">
          <article
            key={event.id}
            className=" px-auto prose-lg mx-auto px-4 lg:px-8  format-blue dark:format-invert"
          >
              <h1 className="mb-4 text-3xl  font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {event.title}
              </h1>
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex  justify-between  items-center mb-6 not-italic">
                    <div>
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <div className=" max-w-prose pr-10  mx-auto leading-none  ">
                  <p className="text-base leading-none  font-light text-gray-500 dark:text-gray-400"><time pubdate>{event.date}</time></p>
                  <br></br>
                    <p className="text-xl leading-none font-bold text-gray-900 dark:text-white">{event.authorName}</p>
                    <p className="text-base leading-none font-light text-gray-500 dark:text-gray-400">{event.authorTitle} -Author</p>
                  </div>
                </div>

                <div className="inline-flex items-center  text-sm text-gray-900 dark:text-white">

                  <div className=" max-w-prose  mx-auto">
                  <p className="text-base leading-none  font-light text-gray-500 dark:text-gray-400"><br/></p>
                  <br></br>
                    <p
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {event.coAuthorName}
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      {event.coAuthorTitle} - Co-Author
                    </p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">
                      
                    </p>
                  </div>
                </div>
                </div>
              </address>
            </header>
            <p className="leading-relaxed  ">{event.details}</p>
            <p className="text-lg  pb-4">{event.storyParagraph1}</p>

            <figure>
              <img alt="event image" src={event.eventImg} />

              <figcaption>{event.refesences}</figcaption>
            </figure>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ablog;
