import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cwgLogo from "../assets/cwgLogo.png";
import "./Home.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ExpertiseAccordion from "../components/ExpertiseAccordion";
import {
  BuildingLibraryIcon,
  GlobeEuropeAfricaIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/Button";
import HomeArticles from "../components/HomeArticles";
import CarouselTeams from "../components/CarouselTeams";
import LocationGrid from "../components/LocationGrid";

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
                    <HomeArticles />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section><LocationGrid/></section>
      

        <section className="pt-20 pb-0.5" id="AttorneysSect">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Meet our Team</h2>
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

        <section
          id="AttorneysSect"
          className="pb-20 pt-0 shadow-lg rounded-lg px-4"
        >
          <div>
            <CarouselTeams/>
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

        <Footer />
      </main>
    </>
  );
}
