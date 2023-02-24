import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import callIcon from "../assets/call-outline.svg";
import mailIcon from "../assets/mail-outline.svg";
import cwgLogo from "../assets/cwgLogo.png";
import medalIcon from "../assets/medal-outline.svg";

import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link"



export default function Landing() {


const [showModal, setShowModal] = React.useState(false);
const[show,setShow]=useState(false);

  return (
    <>
      
      <main>
        <Navbar/>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="items-center flex flex-wrap justify-center">
                  <img src={cwgLogo} alt="cwgLogo"/>
                  <h1 className="text-white font-semibold text-5xl font-sherif flex ">Expert Knowledge & Commercially Aware</h1>
                 </div>
                  <div className="pr-12">                    
                    <p className="mt-4 text-lg text-gray-300">
                    Coghlan, Welsh and Guest is a law firm that provides trusted legal advocacy 
                    for a variety of legal matters. With a commitment to defending your rights 
                    with integrity and expertise, they offer legal services that prioritize their 
                    clients' best interests.
                    </p>
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
                    <ion-icon size="large" name="trail-sign"></ion-icon>
                    </div>
                    <h6 className="text-xl font-semibold">Our History</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                      No other legal firm in Zimbabwe can claim to have been so closely associated with the legal, political and ....
                    </p>
                    <h6 className="text-sm font-semibold ">
                      Learn more<span aria-hidden="true">&rarr;</span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                    <ion-icon size="large" name="library"></ion-icon>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our Profile
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.
                    </p>
                    <h6 className="text-sm font-semibold ">
                      Learn more<span aria-hidden="true">&rarr;</span>
                    </h6>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                    <ion-icon size="large" name="shield-half"></ion-icon>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our Values
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                      These are the guiding principles that drive our organization forward. We are proud of our commitment ...
                    </p>
                    
                    <h6 className="text-sm font-semibold ">
                      <Link smooth to='#ValuesSect'>
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
                When it comes to legal matters, having a trusted team of advocates on your side can make 
                all the difference. That's why Coghlan, Welsh and Guest is committed to providing our
                clients with personalized attention and individualized solutions. With their extensive 
                legal experience and unwavering dedication, you can trust that they will be with you 
                every step of the way, fighting to protect your rights and achieve the best possible outcome.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-red-700 mt-8"
                >
                  Contact Us
                </a>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ">
                  <img
                    alt="..."
                    src="https://images.pexels.com/photos/8112174/pexels-photo-8112174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-red-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-gray-900">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-gray-700">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
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
                  src="https://images.pexels.com/photos/9028990/pexels-photo-9028990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" id="ValuesSect">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-700">
                  <ion-icon size="large" name="shield-half"></ion-icon>
                  </div>
                  <h3 className="text-3xl font-semibold">
                  Our Values in Action.
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  These are the guiding principles that drive our organization 
                  forward. We are proud of our commitment to integrity, diligence, 
                  excellence, alliances, and leadership, and we believe that they 
                  are the key to our continued success and growth.
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
                          <b>Integrity.</b><br/>
                          We are honest, trustworthy, respectful and ethical in our actions. We honour our promises and are accountable for all our actions.
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
                          <b>Diligence.</b><br/>
                          We are meticulous and thorough in our quest to help businesses achieve their objectives.
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
                          <b>Excellence.</b><br/>
                          Excellence is our culture. We deliver quality service within the shortest period of time.
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
                          <b>Alliances.</b><br/>
                          We have over the years established service and stakeholder alliances with local and 
                          international partners. This enables us to deliver quality client-focused service across 
                          the globe.
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
                          <b> Leadership.</b><br/>
                          We provide both transformational and thought leadership in the market.
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


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  THE ATTORNEYS
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                With a combined experience of over 50 years, 
                the attorneys at Coghlan, Welsh and Guest bring a wealth 
                of knowledge and expertise to each and every case they handle.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-1.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=FRASER A. EDKINS">
                    <h5 className="text-xl font-bold">
                    FRASER A. EDKINS
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Senior Partner
                    </p>
                    <div className="mt-6">
                      <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                      
                    </div>
                  </div>
                </div>

                
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-2.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <Link className="Thembiwe"to="/PROFILE?name=THEMBIWE C. MAZINGI">
                    <h5 className="text-xl font-bold">
                      THEMBIWE C. MAZINGI
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Managing Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-4.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=MARGARET L. TAYLOR">
                    <h5 className="text-xl font-bold">
                    MARGARET L. TAYLOR
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-7.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=DAVID C. DHUMBURA">
                    <h5 className="text-xl font-bold">
                     DAVID C. DHUMBURA
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {show?
              <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-3.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name= NOKUTHULA MOYO">
                    <h5 className="text-xl font-bold">
                    NOKUTHULA MOYO
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-5.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name= ANDREW P. LANE-MITCHELL">
                    <h5 className="text-xl font-bold">
                    ANDREW P. LANE-MITCHELL
                    </h5>
                  </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-9.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=WELLINGTON MAGAYA">
                    <h5 className="text-xl font-bold">
                    WELLINGTON MAGAYA
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic10.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=NYADZISAI MATLIDA CHIKWENE">
                    <h5 className="text-xl font-bold">
                    NYADZISAI MATLIDA CHIKWENE
                    </h5>
                  </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-13.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=IAN T. CHAKAWATA">
                    <h5 className="text-xl font-bold">
                    IAN T. CHAKAWATA
                    </h5>
                  </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-14.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=DANIEL T. M. MATAWU">
                    <h5 className="text-xl font-bold">
                    DANIEL T. M. MATAWU
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Partner
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2021/10/et.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=Ennocent T Chidawanyika">
                    <h5 className="text-xl font-bold">
                    Ennocent T Chidawanyika
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Associate
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2021/10/rm.jpeg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=RUVIMBO MUZONZINI">
                    <h5 className="text-xl font-bold">
                    RUVIMBO MUZONZINI
                    </h5>
                  </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Associate
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/elementor/thumbs/dil-pebg4es5q3d06sxkshgbssasyp63hnhdwmuxh7oxra.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=DILLON CHEMHERE">
                    <h5 className="text-xl font-bold">
                    DILLON CHEMHERE
                    </h5>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Associate
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2021/10/dia.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=WILLIAM DIARRA">
                    <h5 className="text-xl font-bold">
                    WILLIAM DIARRA
                    </h5>
                  </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Associate
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6 rounded-full">
                  <img 
                    alt="..."
                    src="http://cwg.co.zw/wp-content/uploads/2018/10/pic-21.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                  <Link className="Thembiwe"to="/PROFILE?name=TAFADZWA R CHIKWAPE">
                    <h5 className="text-xl font-bold">
                    TAFADZWA R CHIKWAPE
                    </h5>
                  </Link>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Estate Administrator
                    </p>
                    <div className="mt-6">
                    <button
                        className=" w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <img  src={callIcon} width='30px' alt="call icon" />
                      </button>
                      <button
                        className=  "w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                         <img src={mailIcon} alt="call icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              </div>:null}

                 


            </div>
            <button onClick={()=>setShow(!show)}>View all</button>
          </div>
        </section>

        <section className="pb-20 relative block bg-neutral-900">
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
                className="text-neutral-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64" id="ExpertiseSect">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  OUR EXPERTISE
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <button onClick={() => setShowModal(true)}><ion-icon  size="large" name="business-outline"></ion-icon></button>
                </div>
                {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Infrastructure/ PPP
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed ">
                  Our lawyers have extensive experience across a broad range of contractual 
                  arrangements for PPP projects. This includes experience in road, water, energy 
                  and other infrastructure sectors. Given our experience in a diverse range of areas, 
                  our PPP practice is complemented by our lawyers in other practice areas such as 
                  property, tax, finance and regulatory work.<br/>

                  We regularly assist clients in drafting and reviewing lease agreements, project contracts,
                 construction, operation & maintenance contracts, joint venture agreements. In addition to 
                 that we advise on bank and capital markets financing, as well as exchange control and 
                 other financial services regulatory issues.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                
                <h6  className="text-xl mt-5 font-semibold text-white ">
                Infrastructure/PPP
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <button onClick={() => setShowModal(true)}><ion-icon size="large" name="sunny-outline"></ion-icon></button>
                  {showModal ? (
                      <>
                        <div
                          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                Mining & Renewable Energy
                                </h3>
                                <button
                                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                  onClick={() => setShowModal(false)}
                                >
                                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                  </span>
                                </button>
                              </div>
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed ">
                                    Coghlan Welsh & Guest has an outstanding energy, mining and commodities practice, representing lenders,
                                     developers and sponsors in significant projects in Zimbabwe. The Practice has been involved in oil, 
                                     gas and power projects in the country, and has represented many local regional and international oil 
                                     companies in drafting; review of agreements and contracts and due diligence reports.  The firm has been 
                                     involved in the mining sector for several years, advising on mining rights and laws, buying, selling, 
                                     financing and developing projects in the most important mining jurisdictions. The team advises on all 
                                     matters pertaining to mining and minerals resource, oil and gas, including corporate and transactional, 
                                     finance, environmental, tax, regulatory, health and safety and litigation and dispute resolution.
                                     <br/>

                                    We advise government agencies, parastatals, utilities, project sponsors and developers, lenders, institutional
                                     investors, contractors and operators on general corporate and regulatory matters, tendering and procurement, 
                                     project structuring and delivery, project finance, PPA, EPC and O&M agreements, fuel supply and power 
                                     off-take and the resolution of disputes relating to construction and power generation. We also advise in more
                                    specialist areas such as local social and environmental matters and compliance with international standards
                                </p>
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </>
                    ) : null}
                </div>
                
                <h5 className="text-xl mt-5 font-semibold text-white">
                Mining and Renewable Energy
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large"name="card-outline"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Banking and Finance
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" color='red' name="home"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Property
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="wallet"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Financial Services Regulatory
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large"name="earth"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Capital Markets
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large"name="git-compare"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Arbitration Commercial<br/> Dispute Resolution
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="globe"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Intellectual Property
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large"name="person-add"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Employment
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="document-attach"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Tax
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large"name="file-tray-full"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Bankruptcy,Insolvency<br/>Restructuring
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="options"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Technology, Media & Telecommunications
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="leaf"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Environmental Law
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="hardware-chip"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Cyber Security<br/>Commercial Crime
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="accessibility"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Family Law
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <ion-icon size="large" name="layers"></ion-icon>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Trusts & Estate Planning
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-neutral-900" id="ContactSection">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24 hours.
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
        <Footer/>
      </main>
      
    </>
  );
}