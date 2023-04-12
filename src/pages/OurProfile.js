
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import cwgLogo from "../assets/cwgLogo.png";





export default function OurProfile() {
  return (
    <>
      
      <Navbar/> 
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('http://cwg.co.zw/wp-content/uploads/2018/12/cwg-our-profile-1.jpg')"
            }}
          >
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
                        className="  h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-64"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                  Our Profile
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Headquarters : Harare, Harare
                  </div>

                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  </div>
          
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center text-left">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      At <b>Coghlan, Welsh & Guest</b>, our number one priority is our client, and we
                      place quality at the forefront of everything we do. Putting our client first is a
                      simple philosophy, but it is one that flows throughout every part of our
                      business and underpins everything we do. We listen to our clients,
                      understand their commercial needs and provide them with practical legal
                      advice which is tailored to those needs. It is this simple approach that
                      ensures we forge strong and close relationships with our clients that are
                      built on trust. We are a full-service law firm comprising a strong and
                      competent group of lawyers.
                        
                        <span> <br/></span>
                        <span> <br/> </span>
                        Our people are our greatest asset! That is why go all out in recruiting the best in the market.
                        <br></br>
                        <br></br>
                        Being one of the largest law firms in Zimbabwe we pride
                        ourselves on our broad expertise and the diversity of our members.
                        Separate from the partnership but owned by it is an executor and trustee
                        company which, inter alia, looks after the estates and trust work of the
                        partnership.
                        <br></br>
                        <br></br>
                        To ensure that we maintain the high levels of quality, for which we are
                        reputable, each project or case we handle is overseen at every stage
                        by a partner in the firm. Whilst we maintain a single central office in Harare
                        we have extensive experience in representing clients across the
                        country. As proof of our ambition of setting up the firm’s footprint globally,
                        we have developed networks and close relations with
                        regional and international law firms globally, including South Africa, the
                        United States of America, the United Kingdom and China just to mention a
                        few.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      
    </>
  );
}