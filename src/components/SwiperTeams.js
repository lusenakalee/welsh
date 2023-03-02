import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Andrew from '../assets/Andrew.jpg'
import Daniel from '../assets/Daniel.jpg'
import David from '../assets/David.jpg'
import dc from '../assets/dc.jpg'
import dia from '../assets/dia.jpg'
import et from '../assets/et.jpg'
import Fraser from  '../assets/Fraser.jpg'
import Ian from '../assets/Ian.jpg'
import Matlida from '../assets/Matlida.jpg'
import Mazingi from '../assets/Mazingi.jpg'
import Moyo from '../assets/Moyo.jpg'
import Taylor from '../assets/Taylor.jpg'
import Thembiwe from '../assets/Thembiwe.jpg'
import Trc from '../assets/Trc.jpg'
import Wellington from '../assets/Wellington.jpg'
import rm from '../assets/rm.jpeg'
import callIcon from "../assets/call-outline.svg";
import mailIcon from "../assets/mail-outline.svg";

import "./SwiperTeams.css";



import { Pagination } from "swiper";

export default function SwiperTeams() {

    const [showModal, setShowModal] = React.useState(false);


  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <div onClick={() => setShowModal(true)} class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Fraser} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">FRASER A. EDKINS</div>
                <p class="text-gray-700 text-base">
                Senior Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:edkins@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>

        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-full max-h-full">
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
   



        </SwiperSlide>
        <SwiperSlide>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Thembiwe} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">THEMBIWE C. MAZINGI</div>
                <p class="text-gray-700 text-base">
                    Managing Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:mazingit@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>
        <div>
           
        </div>





        </SwiperSlide>
        <SwiperSlide>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Moyo} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">NOKUTHULA MOYO</div>
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:moyon@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span>
              
            </div>
        </div>


        </SwiperSlide>
        <SwiperSlide>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Taylor} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">MARGARET L. TAYLOR</div>
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:taylor@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span>
              
            </div>
        </div>




        </SwiperSlide>
        <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Andrew} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">ANDREW P. LANE-MITCHELL</div>
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:alm@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={David} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">DAVID C. DHUMBURA</div>
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:dhumbura@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>
            



        </SwiperSlide>
        <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Wellington} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">WELLINGTON MAGAYA</div>
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:magaya@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>


       
        </SwiperSlide>
        <SwiperSlide>
            


        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Matlida} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">NYADZISAI MATLIDA CHIKWENE</div>
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:nyadzi@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>




        </SwiperSlide>
        <SwiperSlide>
            
            
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={Ian} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">IAN T. CHAKAWATA</div>
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:ian@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
            </div>
        </div>


        </SwiperSlide>


        <SwiperSlide>
            
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={Daniel} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">DANIEL T. M. MATAWU</div>
                    <p class="text-gray-700 text-base">
                    Associate
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="mailto:daniel@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
                </div>
            </div>
    
    
            </SwiperSlide>

            <SwiperSlide>
            
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={et} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">ENNOCENT T CHIDAWANYIKA</div>
                    <p class="text-gray-700 text-base">
                    Associate
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="mailto:ec@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
                </div>
            </div>
    
    
            </SwiperSlide>

            <SwiperSlide>
            
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={rm} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">RUVIMBO MUZONZINI</div>
                    <p class="text-gray-700 text-base">
                    Associate
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="mailto:rm@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
                </div>
            </div>
    
    
            </SwiperSlide>
            <SwiperSlide>
            
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={dc} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">DILLON CHEMHERE</div>
                    <p class="text-gray-700 text-base">
                    Associate
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="mailto:dillon@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
                </div>
            </div>
    
    
            </SwiperSlide>
            <SwiperSlide>
            
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={dia} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">WILLIAM DIARRA</div>
                    <p class="text-gray-700 text-base">
                    Associate
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="mailto:wdiarra@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
                </div>
            </div>
    
    
            </SwiperSlide>
            <SwiperSlide>
            
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={Trc} />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">TAFADZWA R CHIKWAPE</div>
                    <p class="text-gray-700 text-base">
                    Estate Administrator
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <a href="mailto:hbe@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
                </div>
            </div>
    
    
            </SwiperSlide>





      </Swiper>
    </>
  );
}
