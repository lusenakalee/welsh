import React from "react";
import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Events = () => {
  const { eventsData } = useContext(EventsContext);

  return (
    <div>
      <Navbar />

      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            {eventsData.map((id) => (
              <div key={id.id} class="p-6">
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                  {id.date}
                </h2>

                <img
                  class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                  src="http://cwg.co.zw/wp-content/uploads/2018/10/our-insights-2-Copy.jpg"
                  alt="blog"
                />
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase"></h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                  {id.title}
                </h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
                  {id.details}
                </p>
                <div class="mt-4">
                  <a
                    href="#"
                    class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                    title="read more"
                  >
                    {" "}
                    Read More »{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
