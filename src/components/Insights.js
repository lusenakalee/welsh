import React from "react";
import { ReactFragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Insights() {
  return (
    <main className="container-fluid">
      <Navbar />
      <section className="relative bg-[url(https://images.pexels.com/photos/8730785/pexels-photo-8730785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Stay Up-to-Date
              <strong className="block font-extrabold text-red-700">
                Blogs, News, and Events.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Stay Informed on the Latest Legal Developments and Industry
              Trends.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/Events"
                className="block w-full rounded outline px-12 py-3 text-sm font-medium text-red-600 shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Events
              </Link>

              <Link
                to="/Insights"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              >
                News
              </Link>
              <Link
                to="/Insights"
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              >
                Archives
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
  );
}

export default Insights;
