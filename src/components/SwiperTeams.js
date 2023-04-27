import React from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperTeams.css";

import Andrew from "../assets/Andrew.jpg";
import Daniel from "../assets/Daniel.jpg";
import David from "../assets/David.jpg";
import dc from "../assets/dc.jpg";
import dia from "../assets/dia.jpg";
import et from "../assets/et.jpg";
import Fraser from "../assets/Fraser.jpg";
import Matlida from "../assets/Matlida.jpg";
import Mazingi from "../assets/Mazingi.jpg";
import Moyo from "../assets/Moyo.jpg";
import Samantha from "../assets/Samantha.jpg";
import Lisa from "../assets/lisa.jpg";
import Trc from "../assets/Trc.jpg";
import Wellington from "../assets/Wellington.jpg";
import Taylor from "../assets/Taylor.jpg";

export default function SwiperTeams() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation={{clickable: true}}
        autoplay={{ delay: 4000 }}
        className="mySwiper px-4 pt-5 text-xs"
      >
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Fraser}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Senior Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">FRASER A. EDKINS</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 1980
                    <br />
                    <b> Qualifications:</b> BL (Hons) LLB (Rhodesia) <br />
                    <b>Status: </b>Admitted Legal Practitioner, Notary Public
                    and Conveyancer in Zimbabwe
                    <br />
                    <b> Main Practice Areas:</b>
                    Family/Matrimonial Law, Civil Litigation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Mazingi}
                />

                <div className="pt-5">
                  <p className="text-gray-700 text-base">Managing Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">THEMBIWE C. MAZINGI</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b>
                    <b>
                      1982
                      <br />
                      <b>Qualifications:</b>{" "}
                    </b>
                    BL (Hons) LLB (Zim), MBA (UZ) Certificate in Advanced
                    Taxation & VAT (UNISA), Certificate in Advanced Corporate &
                    Securities Law (UNISA)
                    <br />
                    <b>Status:</b> Admitted Legal Practitioner, Notary Public &
                    Conveyancer in Zimbabwe
                    <br />
                    <b>Main Practice Areas:</b> Conveyancing, Notarial Practice,
                    Intellectual Property, Securities, Taxation, Trusts,
                    Commercial and Corporate Law and Energy (oil, gas and
                    electricity)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Moyo}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base"> Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">NOKUTHULA MOYO</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 1994
                    <br />
                    <b>Qualifications:</b> LLBS (Hons) (Zim)
                    <br />
                    <b>Status:</b> Admitted Legal Practitioner, Notary Public
                    and Conveyancer in Zimbabwe
                    <br />
                    <b>Main Practice Areas:</b> Labour and Employment Law,
                    Dispute Resolution, Insolvency, Media and Human Rights
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Andrew}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">ANDREW P. LANE-MITCHELL</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 1986
                    <br />
                    <b>Qualifications:</b> BA (Cape), BA LLB (Cape) <br />
                    <b>Status:</b> Admitted as Legal Practitioner I Zimbabwe{" "}
                    <br />
                    <b>Main Practice Areas:</b> Commercial/Corporate Law (IPOS,
                    Project Finance, Mergers, Acquisitions, Corporate
                    Restructuring, Joint Foreign Exchange and Banking)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Taylor}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">MARGARET L. TAYLOR</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2001 <br />
                    <b>Qualifications:</b> B Proc (SA) <br />
                    <b>Status:</b> Admitted as a Legal Practitioner, Notary
                    Puvlic, and Conveyancer in Zimbabwe <br />
                    <b>Main Practice Areas:</b> Conveyancing and Notarial
                    Practice
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={David}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">DAVID C. DHUMBURA</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2003 <br />
                    <b>Qualifications:</b> LLBS (Hons) (Zim) <br />
                    <b>Status:</b> Admitted Legal Practitioner, Notary Public,
                    and Conveyancer in Zimbabwe <br />
                    <b>Main Practice Areas:</b> Criminal Law, Labour Law, Human
                    Rights Law, and Media Law
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Wellington}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">WELLINGTON MAGAYA</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2008 <br />
                    <b>Qualifications:</b> LLBS (Hons) (Zim), MBA (Zim) <br />
                    <b>Status:</b> Admitted legal Practitioner, Notary Public,
                    and Conveyancer <br />
                    <b>Main Practice Areas:</b> Commercial law, Project
                    Development and Financing, and Employment Law
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Matlida}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">NYADZISAI M. CHIKWENE</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> <br />
                    <b>Qualifications:</b> LLB (UNISA) <br />
                    <b>Status:</b> Admitted Legal Practitioner, Notary Public,
                    and Conveyancer in Zimbabwe <br />
                    <b>Main Practice Areas:</b> Intellectual Property, Property
                    Law, Conveyancing, Trusts <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Daniel}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Partner</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">DANIEL T. M. MATAWU</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2016 <br />
                    <b>Qualifications:</b> LLB (UL) LLM (UCT) <br />
                    <b>Status:</b> Admitted Legal Practitioner <br />
                    <b>Main Practice Areas:</b> Commercial Law, Civil
                    Litigation, Mining Law, Labour Law <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={dc}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Associate</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">DILLON CHEMHERE</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2021 <br />
                    <b>Qualifications:</b> LLB (UNISA) <br />
                    <b>Status:</b> Admitted Legal Practitioner <br />
                    <b>Main Practice Areas:</b> Commercial/Corporate Law,
                    General Practice
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={et}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Associate</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">ENNOCENT T CHIDAWANYIKA</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2020 <br />
                    <b>Qualifications:</b> LLB (UNISA) LLM (UCT) <br />
                    <b>Status:</b> Admitted Legal Practitioner, Notary Public,
                    and Conveyancer in Zimbabwe <br />
                    <b>Main Practice Areas:</b> Corporate and Commercial Law{" "}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Lisa}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Associate</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">LISA B. ZVINAVASHE</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2021 <br />
                    <b>Qualifications:</b> LLB (UNISA) <br />
                    <b>Status:</b> Admitted Legal Practitioner in Zimbabwe
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Samantha}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Associate</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">SAMANTHA MBAUYA</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> 2022 <br />
                    <b>Qualifications:</b> LLBS (Hons) (Zim) <br />
                    <b>Status:</b> Admitted Legal Practitioner, Notary Public,
                    and Conveyancer in Zimbabwe <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide id="WilliamProfile">
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={dia}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">Associate</p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">WILLIAM F.M. DIARRA</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    <b>Year of Registration:</b> <br />
                    <b>Qualifications:</b> LLB (UCT) <br />
                    <b>Status:</b> <br />
                    <b>Main Practice Areas:</b> General Civil Litigation, Labour
                    law, Corporate and Commercial Law, Mining Law, Aviation law,
                    Family Law, Trusts, and Estates Planning
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-1rem">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Trc}
                />
                <div className="pt-5">
                  <p className="text-gray-700 text-base">
                    Estate Administrator
                  </p>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">TAFADZWA R CHIKWAPE</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    A registered Estate Administrator at Harare Board of
                    Executors (Private) Limited. A company wholly owned by
                    Coghlan, Welsh & Guest Legal Practitioners. Joined the firm
                    in 2003 Offers advice in Estate Planning and Administration.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
