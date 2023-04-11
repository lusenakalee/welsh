import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cwgLogo from "../assets/cwgLogo.png";
import medalIcon from "../assets/medal-outline.svg";
import WorkWithUs from "../assets/WorkWithUs.jpg";
import Thembiwe from "../assets/Thembiwe.jpg";
import LocationPic from "../assets/location.jpg";
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
                    legal advocacy for a variety of legal matters. With a
                    commitment to defending your rights with integrity and
                    expertise, we offer legal services that prioritize our
                    clients' best interests.
                  </p>
                  <HashLink
                  smooth
                  to="#ExpertiseSect"
                  
                >
                  <div><Button/></div>
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
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
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

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
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

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                      <ScaleIcon />
                    </div>
                    <h6 className="text-xl font-semibold">Our Vision</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      At our law firm, our values are rooted in our commitment
                      to providing exceptional legal services to our clients.
                    </p>

                    <h6 className="text-sm font-semibold ">
                      <Link smooth to="#ValuesSect">
                        Learn more<span aria-hidden="true">&rarr;</span>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <img src={medalIcon} alt="medalIcon" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  When it comes to legal matters, having a trusted team of
                  advocates on your side can make all the difference. That's why
                  Coghlan, Welsh and Guest is committed to providing our clients
                  with personalized attention and individualized solutions. With
                  their extensive legal experience and unwavering dedication,
                  you can trust that they will be with you every step of the
                  way, fighting to protect your rights and achieve the best
                  possible outcome.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"></p>
                <HashLink
                  smooth
                  to="#ExpertiseSect"
                  className="font-bold text-red-700 mt-8"
                >
                  Explore our Services
                </HashLink>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                  <img
                    alt="..."
                    src={Thembiwe}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-red-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-gray-900">
                      Advocating for Your Rights
                    </h4>
                    <p className="text-md font-light mt-2 text-gray-700">
                      "Our law firm is dedicated to providing exceptional legal
                      services to our clients. We take pride in our commitment
                      to excellence and our ability to achieve successful
                      outcomes for our clients. Our team of experienced lawyers
                      is skilled in a wide range of practice areas, including
                      personal injury, workers' compensation, employment law,
                      and more."<b>- Managing partner</b>
                    </p>
                  </blockquote>
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
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={LocationPic}
                />
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                id="ValuesSect"
              >
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-700">
                    <ScaleIcon />
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Our Values in Action.
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    These are the guiding principles that drive our organization
                    forward. We are proud of our commitment to integrity,
                    diligence, excellence, alliances, and leadership, and we
                    believe that they are the key to our continued success and
                    growth.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-500 mr-3">
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
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-500 mr-3">
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
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-500 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            <b>Excellence.</b>
                            <br />
                            Excellence is our culture. We deliver quality
                            service within the shortest period of time.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-500 mr-3">
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
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-red-500 mr-3">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-0.5" id="AttorneysSect">
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
        </section>

        <section className="pb-20 pt-0 shadow-lg rounded-lg px-4">
          <div>
            <SwiperTeams />
          </div>
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
        <section
          className="relative block py-24 lg:pt-0 bg-neutral-900"
          id="ContactSection"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4  flex flex-wrap">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
