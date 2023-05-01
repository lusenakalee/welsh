import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import cwgLogo from "../assets/cwgLogo.png";
import OurProfileBg from "../assets/OurProfileBg.jpeg";

export default function OurHistory() {
  return (
    <>
      <Navbar />
      <main className="profile-page ">
        <section className="relative block" style={{ height: "500px" }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <img src={OurProfileBg} alt="ProfileBackground" />

            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={cwgLogo}
                        className="  h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                    Our History
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Headquarters : Harare, Zimbabwe
                  </div>

                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    The firm was established under its present name in 1911,
                    having been in existence under its predecessors in title
                    since the 1890s in South Africa.
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center text-left">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        No other legal firm in Zimbabwe can claim to have stood
                        the test of time and to have been so closely associated
                        with the legal, political, and social development of the
                        country as has Coghlan Welsh & Guest.
                        <br></br>
                        <br></br>
                        Sir Charles Coghlan was the first Premier of the then
                        Rhodesia, whilst Sir Ernest Guest was a top-ranking
                        Cabinet member and Sir Allan Welsh was Speaker of
                        Parliament for many years.
                        <br></br>
                        <br></br>
                        The firm was established under its present name in 1911,
                        having been in existence under its predecessors in title
                        since the 1890s in South Africa. The legal work in the
                        courts during the era in which the firm was founded was
                        inclined towards mining law and resolving mining
                        disputes, insolvencies, bills of exchange, partnerships,
                        illicit liquor dealing, unlicensed possession of uncut
                        diamonds being most common.
                        <br></br>
                        <br></br>
                        The discovery of diamonds at Kimberley was the main
                        catalyst, followed by the discovery of gold on the
                        Witwatersrand. Several legal firms, out of all
                        proportion to the size of the population, had
                        established themselves in Kimberley when Charles Coghlan
                        entered the legal arena. The two in most popular demand
                        were Coghlan and Coghlan, and Frames and Grimmer.
                        Although these two firms were invariably engaged on
                        opposite sides in all cases of any consequence in
                        Kimberley, later came together in what was then
                        Rhodesia. The firm has operated under the name Coghlan
                        Welsh & Guest since 1911.
                        <br></br>
                        <br></br>
                        As an indication to show its desire to grow, the firm in
                        2005 merged with another long-standing law firm of
                        Stumbles & Rowe.
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
