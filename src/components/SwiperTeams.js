import React from "react";
import { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './SwiperTeams.css';



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

export default function SwiperTeams() {
  const [show, setShow] = useState(false);





  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation 
        autoplay={{delay:10000}}
       
        
        
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
                    Practice Head: Family Law Practice Year of Registration:
                    1980 Qualifications: BL (Hons) LLB (Rhodesia) Status:
                    Admitted to practise as a Legal Practitioner, Notary Public
                    and Conveyancer in Zimbabwe Main areas of Practice Family/
                    Matrimonial Law, Civil Litigation.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      Fraser Edkins became the firm’s senior partner and
                      chairman on the 1st of January 2016. Prior to assuming his
                      new role Fraser was in general practice (including
                      Criminal Law) and then moved to head the firm’s Family Law
                      practice specializing in matrimonial litigation. Fraser is
                      a Committee member and past Chairman of the History
                      Society of Zimbabwe and Editor of its annual journal.
                      Before joining the firm in 1985, Fraser was a Judge’s
                      Clerk, a Public Prosecutor and a Provincial Magistrate for
                      12 years. Fraser has a wealth of experience in general
                      civil litigation and is considered one of the country’s
                      leading divorce attorneys. He enjoys his garden and social
                      tennis and golf. He has been married to Maureen for 40
                      years and their daughter is a Professor of Biochemistry at
                      Rhodes University in South Africa.
                    </p>
                  ) : null}
                  <button className="pb-5" onClick={() => setShow(!show)}>
                    View all
                  </button>
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
                                  <p className="text-gray-700 text-base">Managing Partner</p>
                <div className="pt-5">

               

                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">THEMBIWE C. MAZINGI</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    Practice Head: Conveyancing& Securities Intellectual
                    Property Year of Registration: 1982 Qualifications: BL
                    (Hons) LLB (Zim), MBA (UZ) Certificate in Advanced Taxation
                    & VAT (UNISA); Certificate in Advanced Corporate &
                    Securities Law(UNISA) Status: Admitted to practice as a
                    Legal Practitioner, Notary Public and Conveyancer in
                    ZimbabweConveyancing Main areas of Practice Conveyancing,
                    Notarial Practice, Intellectual Property, Securities,
                    Taxation, Trusts, Commercial and Corporate Law and Energy
                    (oil, gas and electricity).{" "}
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      She is heavily involved in corporate governance and
                      compliance, regulatory issues, more particularly the
                      interpretation of diverse range of legislation, evaluating
                      its impact on organizations and policy development.
                      Thembiwe leads the intellectual property division of the
                      firm and has many years of experience in conveyancing and
                      property law. Thembiwe sits on various boards including
                      Ariston Holdings Limited, NICOZ Diamond Insurance Limited
                      (where she is Deputy Chairperson of the Board), African
                      Century Limited and the Innscor Limited Group. Thembiwe’s
                      past directorships include Zimbabwe Allied Banking Group
                      Limited, Fidelity Asset Management and Zimbabwe
                      Electricity Supplies Authority and National Tyre Services.
                      Thembiwe is an avid member of the International Bar
                      Association in which she is a member of the African
                      Regional, Mergers and Acquisitions and Practise Management
                      Forums and Committees.
                    </p>
                  ) : null}
                  <button className="pb-5" onClick={() => setShow(!show)}>
                    View all
                  </button>
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
                                  <p className="text-gray-700 text-base"> Partner</p>

              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">
                  <h3 className=" font-semibold">NOKUTHULA MOYO</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    Year of Registration: 1994 Qualifications: LLBS (Hons) (Zim)
                    Status: Admitted to practise as a Legal Practitioner, Notary
                    Public and Conveyancer in Zimbabwe Main areas of Practice
                    Labour and Employment Law, Dispute Resolution, Insolvency
                    Media and Human Rights.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      Nokuthula Moyo is one of Zimbabwe’s leading employment
                      lawyers and heads the firm’s Employment department. She
                      has extensive experience in all aspects of employment law,
                      including drafting local and cross border employment
                      contracts and employee policies and procedures, consulting
                      agreements and restraints of trade; furnishing advice on
                      restructuring and retrenchments; furnishing advice on the
                      employment law implications of the transfer of a business
                      as a going concern; conducting due diligence exercises
                      from an employment law perspective, She litigates in all
                      tribunals and Courts in Zimbabwe. Nokuthula is also a
                      human rights activist and is a past chairperson of the
                      Zimbabwe Lawyers for Human Rights.
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Year of Registration: 1986 Qualifications: BA (CAPE),BA LLB
                    (CAPE) Main areas of Practice Commercial/ Corporate Law
                    (IPOS, Project Finance, Mergers, Acquisitions, Corporate
                    Restructuring, Joint Foreign Exchange and Banking).
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      Andrew Paul Lane-Mitchell is one of the Lead Partners of
                      the firm’s corporate and commercial law division having
                      practiced in many years in the corporate sector. Andrew’s
                      experience includes being the Group Legal Counsel for
                      Meikles Limited (listed on the Zimbabwe and London Stock
                      Exchanges) and Corporate Finance Manager for Stanbic
                      Zimbabwe Limited, one of Zimbabwe’s leading retail banks
                      and a division of Standard Bank South Africa, which
                      positions he held before joining the firm’s corporate law
                      team.
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Year of Registration: 2003 Qualifications: LLBS (Hons) (Zim)
                    Main areas of Practice Criminal Law, Labour Law, Human
                    Rights Law and Media Law.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      David leads the firm’s criminal law department and has a
                      wealth of knowledge and experience in criminal law and
                      procedure having served as a magistrate for many years
                      before joining private practice.
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Year of Registration: 2008 Qualifications: LLBS (Hons), MBA
                    (ZIM) Main areas of Practice Wellington Magaya specializes
                    in Commercial Law, Project development and Financing, and
                    employment law.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      He has advised major local and international corporates in
                      the commodities and renewable energy sectors. He has been
                      involved in the negotiation, structuring and advising
                      clients in high value transactions and in respect of all
                      regulatory requirements. He also boasts of vast experience
                      in all aspects of employment law ranging from drafting
                      local and cross border employment contracts and employee
                      policies and procedures, consulting agreements and
                      restraints of trade; advising on restructuring and
                      retrenchments; furnishing advice on the employment law
                      implications in acquisitions and transfer of businesses;
                      conducting due diligence exercises from both a lender and
                      an employment law perspective. He has over the years been
                      involved in commercial and employment dispute resolution
                      in both local and international tribunals. Wellington
                      currently sits on the council of the Law Society of
                      Zimbabwe where we he serves in the Finance and
                      Administration Committee as well as the Liaison and
                      Publicity Committees..
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                  <h3 className=" font-semibold">MATLIDA N. CHIKWENE</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    Nyadzisai M. Chikwene has been with Coghlan Welsh & Guest
                    for over ten years and in those years has worked in
                    different departments of the firm acquiring experience and
                    expertise in the relevant fields finally settling for the
                    Intellectual Property and Conveyancing Department.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      
                      Intellectual Property Nyadzi specialises in intellectual
                      property registration (locally, regionally and
                      internationally), advisory, assignment and cession of
                      intellectual property, management and maintenance of
                      intellectual property portfolios on behalf of clients. She
                      provides advice on initial registration and renewal of IP
                      rights both locally and internationally; purchase,
                      transfer and licensing of IP rights; IP portfolio
                      management; enforcement of IP rights; due diligence
                      investigations; licensing; confidential information
                      protection; restraints of trade; sponsorship agreements;
                      product design protection; commercial agreements relating
                      to IP and franchising. Nyadzi has also participated in the
                      formulation of laws and policies on intellectual property
                      in Zimbabwe and ARIPO and have established relations with
                      local, regional and international Intellectual Property
                      law practitioners. She has successfully represented both
                      local individuals and big foreign corporations in the
                      registration and prosecution against infringement of their
                      trademarks and patents both at the local Registry up to
                      the High Courts. Conveyancing She has been involved in
                      registration of securities for large financing
                      transactions as well as registration of transfers from
                      sales, donations and estates. Notarial Work Nyadzi also
                      advises on formation and registration of charitable or
                      family Trusts together with all Notarial duties.
                    </p>
                  ) : null}
                  <button className="pb-5" onClick={() => setShow(!show)}>
                    View all
                  </button>
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
                    Qualification: LLB (UL) , LLM (UCT) SA
                    
                    Daniel joined the firm in 2016 and steadily rose through the ranks into Partnership in
                      2022.<br/>
                      During Daniel’s tenure with the firm, he has had the opportunity to oversee high
                      value commercial litigation some of which involving local and international
                      corporates.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      {" "}

                      Daniel also has vast experience in employment law where he has had advised on
                      issues to do with restructuring and retrenchment just to mention a few.
                      From a compliance perspective, Daniel has worked in house for a multinational
                      corporation. Through the in-house experience he has managed to “sharpen his eye”
                      and be better placed to identify risk and to deal with all related compliance issues.
                      In his spare time, he enjoys watching and playing sport. His enjoyment of sport has
                      driven him to work towards the establishment of the firm’s sports law department.
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Position: Associate Qualification: LLB (UL) , LLM (UCT) SA
                    Year of registration: 2017
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      {" "}
                      Ennocent joined our Corporate and Commercial Law team in
                      October 2019, having been a leading Corporate Banker for a
                      long time, a career which started in 1996 as a Graduate
                      trainee with an International Bank. Thereafter he held
                      Senior Executive positions both local and international.
                      He was admitted to practice law in March 2021. His special
                      responsibilities are in Mining, Energy and Banking. The
                      main areas of interest are Mergers & Acquisitions, and all
                      aspects of Corporate and commercial Law. He is also a
                      Conveyancer and Notary Public. To gravitate into Law,
                      Ennocent graduated LLB with a Cum laude, Master of Law LLM
                      (Mining, Gas, Oil & Petroleum Law) with the University of
                      Cape Town, and is a PhD (Mining Law) Candidate.
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Year of Registration: 2021 Email: dillon@cwg.co.zw
                    Qualifications: LLB (UNISA)
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      {" "}
                      Dillon joined the firm in 2020. As an Associate, he has
                      been working in Corporate and Commercial Law department
                      where he has dealt with various issues of general company
                      law, drafting, and reviewing of agreements related to
                      commercial transactions. Dillon is also interested in
                      litigation work.{" "}
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Year of registration: 2021
                    <br />
                    Qualifications: Bachelor of Laws (UNISA)
                    <br />
                    Status : Admitted to practice as a Legal Practitioner in
                    Zimbabwe
                    <br />
                    Lisa joined Coghlan, Welsh & Guest in November 2020 as an
                    intern and was admitted as an Associate in June 2022. Lisa’s
                    practice areas include labour law, criminal law, company law
                    and civil litigation. Lisa is a member of the Young Lawyers
                    Association of Zimbabwe.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      {" "}
                      Apart from her legal interests, she enjoys philanthropic
                      work and charity to which she is a member of No Child Left
                      Unclothed charity organization.{" "}
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                    Samantha joined the firm in 2019 as an Intern, and became an
                    Associate in June 2022. She holds a Bachelor of Laws Honours
                    Degree from the University of Zimbabwe, and is currently
                    studying towards a Masters in Business Administration.
                    Samantha is a registered Legal Practitioner, Conveyancer and
                    Notary Public.
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      {" "}
                      Samantha’ specialties includes in civil litigation with an
                      inclination towards family law; corporate and commercial
                      law; with keen interest in the sectors of mining, energy,
                      criminal law, Aviation law, Data protection and Artificial
                      intelligence.
                      <br />
                      Samantha’s experience in Law practice continues to grow.
                      Apart from a good number of local criminal and civil
                      matters, she has also provided legal service to foreign
                      entities based in Swaziland, United Kingdom and South
                      Africa. Apart from her legal interests, Samantha enjoys
                      traveling, team sports and volunteer work.{" "}
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left" >
                <div className="md:pr-12">
                  <h3 className=" font-semibold">WILLIAM F.M. DIARRA</h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                    Year of Registration: 2021 Email: wdiarra@cwg.co.zw
                    Qualifications: LLB(UCT) Practice Areas : General civil
                    litigation, Labour law, Corporate and Commercial law, Mining
                    law, Aviation law, Family law, Trusts, and Estate planning
                  </p>
                  {show ? (
                    <p className="text-gray-600">
                      {" "}
                      William joined the Litigation and Commercial law
                      Departments of the firm in June 2021. He has a keen
                      interest in corporate and commercial law and has recently
                      extended his practice areas to mining and aviation .{" "}
                    </p>
                  ) : null}
                  <button onClick={() => setShow(!show)}>View all</button>
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
                  {show ? <p></p> : null}
                  <button onClick={() => setShow(!show)}>View all</button>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
