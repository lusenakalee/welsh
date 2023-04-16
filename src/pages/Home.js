import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cwgLogo from "../assets/cwgLogo.png";
import medalIcon from "../assets/medal-outline.svg";
import { Articles } from "../components/Events";
import ReactIdSwiper from "react-id-swiper";

import LocationPic from "../assets/location.png";
import LocationPic2 from "../assets/location2.png";
import LocationPic3 from "../assets/location3.png";
import LocationPic4 from "../assets/location3.png";
import Skyline from "../assets/skyline.jpg";
import "./Home.css";
import { HashLink, HashLink as Link } from "react-router-hash-link";
import SwiperTeams from "../components/SwiperTeams";
import ExpertiseAccordion from "../components/ExpertiseAccordion";
import {
  BuildingLibraryIcon,
  GlobeEuropeAfricaIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { eventsData } from "../Data/EventsData";
import Leadership from "../components/Leadership";

SwiperCore.use([Pagination, Navigation]);

export default function Landing() {
  return (
    <>
      <main>
        <Navbar />
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="items-center flex flex-wrap justify-center">
                  <img src={cwgLogo} alt="cwgLogo" />
                  <h3 className="text-white font-semibold  font-sherif text-3xl w-full">
                    Expert Knowledge & Commercially Aware
                  </h3>
                </div>
                <div className="pr-12">
                  <p className="mt-4 text-lg text-gray-300">
                    Coghlan, Welsh and Guest is a law firm that provides trusted
                    legal advice and individualised solutions. With a commitment
                    to safeguarding our client's rights with integrity and
                    expertise, we offer legal services that prioritize our
                    clients' best interests.
                  </p>
                  <HashLink smooth to="#ExpertiseSect">
                    <div>
                      <Button />
                    </div>
                  </HashLink>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-2">
            <div className="flex flex-wrap">
              <div className="w-full md:w-3/12 pt-16 px-2 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg hover:animate-bounce rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <GlobeEuropeAfricaIcon />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our value proposition
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our teams understand you and your business and we are
                      structured according to the industries you operate in. Our
                      focus is on helping you identify and mitigate risk while
                      enabling your business to thrive. We care about the impact
                      of investment and business on environment and operating
                      ethically at the intersection of innovation, profitability
                      and regulation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-2 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg hover:animate-bounce rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <BuildingLibraryIcon />
                    </div>
                    <h6 className="text-xl font-semibold">Our History</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Over the years, we have built a reputation for excellence
                      and have established ourselves as a trusted legal resource
                      in our community. Our team of experienced lawyers has
                      helped countless clients to achieve their legal goals, and
                      we are proud of the positive impact we have had on our
                      clients' lives.
                    </p>
                    <Link to="/OurHistory">
                      <h6 className="text-sm font-semibold ">
                        Learn more<span aria-hidden="true">&rarr;</span>
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-3/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg  hover:animate-bounce">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <ScaleIcon />
                    </div>
                    <h6 className="text-xl font-semibold">Our Vision</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      As a forward-thinking law firm that has undoubtedly stood
                      the test of time, we strive to become the go-to corporate
                      attorneys not only in Zimbabwe but across the globe.
                      <br />
                      To maintain our status as the leading full-service and
                      future- facing commercial law firm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/12 px-2 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg hover:animate-bounce rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black">
                      <GlobeEuropeAfricaIcon />
                    </div>
                    <h6 className="text-xl font-semibold">Our Profile</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      If you are in need of legal representation, we encourage
                      you to learn more about our firm and how we can help you.
                      We are here to provide the legal support and guidance you
                      need to achieve a successful outcome.
                    </p>
                    <Link to="/OurProfile">
                      <h6 className="text-sm font-semibold ">
                        Learn more<span aria-hidden="true">&rarr;</span>
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-24 sm:py-32">
              <div className="">
                <div className="w-full  justify-between  ">
                  <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Stay Informed with Our Latest Insights
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                      Our blog covers the latest legal trends, news, and
                      developments to help you navigate your legal needs.{" "}
                    </p>
                  </div>
                  <div>
                    <Swiper
                      className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                      slidesPerView={3}
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      navigation
                      autoplay={{ delay: 10000 }}
                    >
                      {eventsData.map((event) => (
                        <SwiperSlide
                          key={event.id}
                          className="flex max-w-xl px-16 flex-col items-start justify-between"
                        >
                          <div className="flex items-center gap-x-4 text-xs">
                            <time
                              dateTime={event.date}
                              className="text-gray-500 mb-8 mt-8"
                            >
                              {event.date}
                            </time>
                          </div>
                          <div className="group relative">
                            <img
                              className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                              src={event.eventImg}
                              alt="blog"
                            />
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <Link to={`/Article/${event.id}`}>
                                <span className="absolute inset-0" />
                                {event.title}
                              </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                              {event.details}
                            </p>
                          </div>
                          <div className="relative mt-8 flex items-center gap-x-4">
                            <img
                              src={event.authorImg}
                              alt=""
                              className="h-10 w-10 rounded-full bg-gray-50"
                            />
                            <div className="text-sm leading-6">
                              <p className="font-semibold text-gray-900">
                                <a href={event.id}>
                                  <span className="absolute inset-0" />
                                  {event.authorName}
                                </a>
                              </p>
                              <p className="text-gray-600">
                                {event.authorTitle}
                              </p>
                            </div>
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>

                        </SwiperSlide>
                        
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  autoplay={{ delay: 2000 }}
                  className="mySwiper px-4 pt-5 text-xs"
                >
                  <SwiperSlide>
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src={LocationPic}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src={LocationPic2}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src={LocationPic3}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-lg"
                      src={LocationPic4}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                id="ValuesSect"
              >
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-black">
                    <ScaleIcon />
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Our Values in Action.
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    These are the guiding principles that drive our organization
                    forward. We are proud of our commitment to integrity,
                    diligence, excellence, alliances, leadership and teamwork
                    and we believe that they are the key to our continued
                    success and growth.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-gray-600 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b>Integrity.</b>
                            <br />
                            We are honest, trustworthy, respectful and ethical
                            in our actions. We honour our promises and are
                            accountable for all our actions.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-gray-600 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b>Diligence.</b>
                            <br />
                            We are meticulous and thorough in our quest to help
                            businesses achieve their objectives.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-gray-600 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b>Excellence.</b>
                            <br />
                            Excellence is our culture. We deliver quality
                            service within the shortest period.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-gray-600 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b>Alliances.</b>
                            <br />
                            We have over the years established service and
                            stakeholder alliances with local and international
                            partners. This enables us to deliver quality
                            client-focused service across the globe.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-gray-600 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b> Leadership.</b>
                            <br />
                            We provide both transformational and thought
                            leadership in the market.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-gray-600 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b>Teamwork.</b>
                            <br />
                            We believe that teamwork breeds efficiency and
                            effectiveness. Teams have been set up within the
                            firm to enable us to continuously provide
                            world-class legal advice and solutions.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* <section className="pt-20 pb-0.5" id="AttorneysSect">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">THE ATTORNEYS</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  With a combined experience of over 50 years, the attorneys at
                  Coghlan, Welsh and Guest bring a wealth of knowledge and
                  expertise to each and every case they handle.
                </p>
                <p className="swiping">Swipe right below to see more >></p>
              </div>
            </div>
          </div>
                      </section>*/}

        <section  id="AttorneysSect" className="pb-20 pt-0 shadow-lg rounded-lg px-4">
          <div><Leadership/></div>
          {/*<div>
            <SwiperTeams />
                    </div>*/}
        </section>

        <section className="pb-20 relative block bg-black">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-black fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div
            className="container mx-auto px-4 lg:pt-24 lg:pb-64"
            id="ExpertiseSect"
          >
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4 pb-10">
                <h2 className="pt-10 text-4xl font-semibold text-white">
                  {" "}
                  OUR EXPERTISE
                </h2>
                <ExpertiseAccordion />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
