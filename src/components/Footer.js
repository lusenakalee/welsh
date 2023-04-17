import mailIcon from "../assets/mail-outline.svg"
import FbLogo from "../assets/logo-facebook.svg"
import LnLogo from "../assets/logo-linkedin.svg"
import callIcon from "../assets/call-outline.svg"
import tester from "../assets/tester.pdf"
import Map from "./Map"


export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
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
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full py-4  lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms.
              </h5>
              <div className="mt-6 ">
                <a href="mailto:email@cwg.co.zw">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img src={mailIcon} alt="mail icon" />
                </button>
                </a>
                <a href="https://www.linkedin.com/company/coghlan-welsh-and-guest/" target="_blank">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img src={LnLogo} alt="LnLogo" />
                </button>
                </a>
                <a href="tel:+263242794930">
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                   <img src={callIcon} alt="callIcon" />
                </button>
                </a>
                
              </div>


            </div>
          
           
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="/">Home
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="/OurProfile">Our Profile
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="/Insights">Articles
                      </a>
                    </li>


                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Downloads
                  </span>
                  <ul className="list-unstyled">{/*
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href={tester} download={tester}>Abstract
                    </a>
                    </li>*/}
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="">Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="">Privacy Policy
                      </a>
                    </li>
                    
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className="py-2">
              <Map />
              </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                <div>
                Copyright © {new Date().getFullYear()}{" "}Coghlan, Welsh & Guest {" "}</div>
       
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-right text-xs px-4">
                <a
                  href="mailto:lusenakalee@gmail.com;sharahwa@gmail.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Designed by  Shungu Harahwa & Leroy Lusenaka
                </a>
                </div>
      </footer>
    </>
  );
}

