import React from "react";
import { useState } from "react";
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
import rm from "../assets/rm.jpeg"




import { Pagination } from "swiper";

export default function SwiperTeams() {
  const[show,setShow]=useState(false);



  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper px-4 pt-5 text-xs">
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
                <p class="text-gray-700 text-base">
                Senior Partner
                </p>
                <a href="mailto:edkins@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  FRASER A. EDKINS
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Practice Head: Family Law Practice

                  Year of Registration: 1980

                  Qualifications: BL (Hons) LLB (Rhodesia)

                  Status: Admitted to practise as a Legal Practitioner, Notary Public and Conveyancer in

                  Zimbabwe

                  Main areas of Practice

                  Family/ Matrimonial Law, Civil Litigation.</p>
                  {show?
                  <p>Fraser Edkins became the firm’s senior partner and chairman on the 1st of January 2016. Prior to assuming his new role Fraser was in general practice (including Criminal Law) and then moved to head the firm’s Family Law practice specializing in matrimonial litigation. Fraser is a Committee member and past Chairman of the History Society of Zimbabwe and Editor of its annual journal. Before joining the firm in 1985, Fraser was a Judge’s Clerk, a Public Prosecutor and a Provincial Magistrate for 12 years. Fraser has a wealth of experience in general civil litigation and is considered one of the country’s leading divorce attorneys. He enjoys his garden and social tennis and golf. He has been married to Maureen for 40 years and their daughter is a Professor of Biochemistry at Rhodes University in South Africa.</p>
                  
                  :null}
                   <button className="pb-5" onClick={()=>setShow(!show)}>View all</button>
                 
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
                <a href="mailto:edkins@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  Mrs Mazingi
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Practice Head: Conveyancing& Securities Intellectual Property Year of Registration: 1982 Qualifications: BL (Hons) LLB (Zim), MBA (UZ) Certificate in Advanced Taxation & VAT (UNISA); Certificate in Advanced Corporate & Securities Law(UNISA) Status: Admitted to practice as a Legal Practitioner, Notary Public and Conveyancer in ZimbabweConveyancing

                  Main areas of Practice
                  Conveyancing, Notarial Practice, Intellectual Property, Securities, Taxation, Trusts, Commercial and Corporate Law and Energy (oil, gas and electricity). </p>
                  {show?
                  <p>She is heavily involved in corporate governance and compliance, regulatory issues, more particularly the interpretation of diverse range of legislation, evaluating its impact on organizations and policy development.

                  Thembiwe leads the intellectual property division of the firm and has many years of experience in conveyancing and property law. Thembiwe sits on various boards including Ariston Holdings Limited, NICOZ Diamond Insurance Limited (where she is Deputy Chairperson of the Board), African Century Limited and the Innscor Limited Group. Thembiwe’s past directorships include Zimbabwe Allied Banking Group Limited, Fidelity Asset Management and Zimbabwe Electricity Supplies Authority and National Tyre Services. Thembiwe is an avid member of the International Bar Association in which she is a member of the African Regional, Mergers and Acquisitions and Practise Management Forums and Committees.</p>
                  
                  :null}
                   <button className="pb-5" onClick={()=>setShow(!show)}>View all</button>
                 
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
                <a href="mailto:moyon@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  Nokuthula Moyo
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 1994 
                  Qualifications: LLBS (Hons) (Zim) 

                    Status: Admitted to practise as a Legal Practitioner, Notary Public and Conveyancer in Zimbabwe

                  Main areas of Practice Labour and Employment Law, Dispute Resolution, Insolvency Media and Human Rights.</p>
                  {show?
                  <p>Nokuthula Moyo is one of Zimbabwe’s leading employment lawyers and heads the firm’s Employment department. She has extensive experience in all aspects of employment law, including drafting local and cross border employment contracts and employee policies and procedures, consulting agreements and restraints of trade; furnishing advice on restructuring and retrenchments; furnishing advice on the employment law implications of the transfer of a business as a going concern; conducting due diligence exercises from an employment law perspective, She litigates in all tribunals and Courts in Zimbabwe.
                    Nokuthula is also a human rights activist and is a past chairperson of the Zimbabwe Lawyers for Human Rights.</p>
                  
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:alm@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  ANDREW P. LANE-MITCHELL
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 1986

                    Qualifications: BA (CAPE),BA LLB (CAPE) 

                    Main areas of Practice

                    Commercial/ Corporate Law (IPOS, Project Finance, Mergers, Acquisitions, Corporate Restructuring, Joint Foreign Exchange and Banking).</p>
                  {show?
                  <p>Andrew Paul Lane-Mitchell is one of the Lead Partners of the firm’s corporate and commercial law division having practiced in many years in the corporate sector. Andrew’s experience includes being the Group Legal Counsel for Meikles Limited (listed on the Zimbabwe and London Stock Exchanges) and Corporate Finance Manager for Stanbic Zimbabwe Limited, one of Zimbabwe’s leading retail banks and a division of Standard Bank South Africa, which positions he held before joining the firm’s corporate law team.</p>
                  
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="mailto:dhumbura@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  DAVID C. DHUMBURA
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 2003

                  Qualifications: LLBS (Hons) (Zim)

                  Main areas of Practice

                  Criminal Law, Labour Law, Human Rights Law and Media Law.</p>
                  {show?
                  <p>David leads the firm’s criminal law department and has a wealth of knowledge and experience in criminal law and procedure having served as a magistrate for many years before joining private practice.</p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Partner
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:magaya@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  WELLINGTON MAGAYA
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 2008

                  Qualifications: LLBS (Hons), MBA (ZIM)

                  Main areas of Practice
                  Wellington Magaya specializes in Commercial Law, Project development and Financing, and employment law.</p>
                  {show?
                  <p>He has advised major local and international corporates in the commodities and renewable energy sectors. He has been involved in the negotiation, structuring and advising clients in high value transactions and in respect of all regulatory requirements. He also boasts of vast experience in all aspects of employment law ranging from drafting local and cross border employment contracts and employee policies and procedures, consulting agreements and restraints of trade; advising on restructuring and retrenchments; furnishing advice on the employment law implications in acquisitions and transfer of businesses; conducting due diligence exercises from both a lender and an employment law perspective. He has over the years been involved in commercial and employment dispute resolution in both local and international tribunals. 

                  Wellington currently sits on the council of the Law Society of Zimbabwe where we he serves in the Finance and Administration Committee as well as the Liaison and Publicity Committees..</p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:nyadzi@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  NYADZISAI MATLIDA CHIKWENE
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Nyadzisai M. Chikwene has been with Coghlan Welsh & Guest for over ten years and in those years has worked in different departments of the firm acquiring experience and expertise in the relevant fields finally settling for the Intellectual Property and Conveyancing Department.</p>
                  {show?
                  <p>Intellectual Property
                  Nyadzi specialises in intellectual property registration (locally, regionally and internationally), advisory, assignment and cession of intellectual property, management and maintenance of intellectual property portfolios on behalf of clients.  She provides advice on initial registration and renewal of IP rights both locally and internationally; purchase, transfer and licensing of IP rights; IP portfolio management; enforcement of IP rights; due diligence investigations; licensing; confidential information protection; restraints of trade; sponsorship agreements; product design protection; commercial agreements relating to IP and franchising.  Nyadzi has also participated in the formulation of laws and policies on intellectual property in Zimbabwe and ARIPO and have established relations with local, regional and international Intellectual Property law practitioners. 
                  
                  She has successfully represented both local individuals and big foreign corporations in the registration and prosecution against infringement of their trademarks and patents both at the local Registry up to the High Courts.
                  
                  Conveyancing
                  She has been involved in registration of securities for large financing transactions as well as registration of transfers from sales, donations and estates.
                  
                  Notarial Work
                  Nyadzi also advises on formation and registration of charitable or family Trusts together with all Notarial duties.</p>
                  :null}
                   <button className="pb-5" onClick={()=>setShow(!show)}>View all</button>
                 
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
                  src={Ian}
                />
                <div className="pt-5">
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:ian@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
              
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  IAN T. CHAKAWATA
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 2016

                      Qualifications: LLB (UFH) LLM in MERCANTILE LAW (UP) 

                      Status: Admitted to practise as a Legal Practitioner in Zimbabwe.

                      Main areas of Practice
                      Since joining the firm in April 2016,Ian’s main interests are in debt prevention measures, tax law, information and technology law, indigenisation,compliance and insolvency law.</p>
                  {show?
                  <p> His focus has been primarily on Commercial Law, Employment Law and Civil Law Litigation, drafting legal advice; reviewing agreements, employment codes of conduct, employment contracts and proposing legal reforms. He has assisted foreign investors to navigate the indigenisation legislation and carries out due diligence work on various companies in key industry sectors in Zimbabwe and has worked as local counsel in conjunction with regional and international law firms on a complex water reticulation project. </p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:daniel@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  DANIEL T. M. MATAWU
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Position: Associate

                Qualification: LLB (UL) , LLM (UCT) SA

                Year of registration: 2017</p>
                  {show?
                  <p> Daniel joined the Firm in 2016. As an associate he has been working in the litigation department where he has dealt with various issues pertaining to labour law, general company law and drafting and reviewing agreements related to commercial transactions.  Besides hisability to draft pleadings for court and arbitration proceedings, Daniel has experience in representing a vast array of companies and individuals in the Magistrates Court and High Court of Zimbabwe.</p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:ec@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  ENNOCENT T CHIDAWANYIKA
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Position: Associate

                Qualification: LLB (UL) , LLM (UCT) SA

                Year of registration: 2017</p>
                  {show?
                  <p> Ennocent joined our Corporate and Commercial Law team in October 2019, having been a leading Corporate Banker for a long time, a career which started in 1996 as a Graduate trainee with an International Bank. Thereafter he held Senior Executive positions both local and international. He was admitted to practice law in March 2021. His special responsibilities are in Mining, Energy and Banking. The main areas of interest are Mergers & Acquisitions, and all aspects of Corporate and commercial Law. He is also a Conveyancer and Notary Public. To gravitate into Law, Ennocent graduated LLB with a Cum laude, Master of Law LLM (Mining, Gas, Oil & Petroleum Law) with the University of Cape Town, and is a PhD (Mining Law) Candidate.</p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                  src={rm}  
                />
                <div className="pt-5">
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:rm@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  RUVIMBO MUZONZINI
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 2015

                  Email: rm@cwg.co.zw

                  Qualifications:

                  LLB (HONS) OBU – UK

                  Main Areas of Practice

                  Civil Litigation, Corporate and Commercial Law, Regulatory Compliance</p>
                  {show?
                  <p> Ruvimbo joined the firm’s Litigation and Commercial Law departments in October 2019. She has a keen interest in Corporate Litigation as well as Corporate Governance and Compliance. </p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:dillon@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  DILLON CHEMHERE
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 2021

                    Email: dillon@cwg.co.zw

                    Qualifications: LLB (UNISA)</p>
                  {show?
                  <p> Dillon joined the firm in 2020. As an Associate, he has been working in Corporate and Commercial Law department where he has dealt with various issues of general company law, drafting, and reviewing of agreements related to commercial transactions. Dillon is also interested in litigation work. </p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                  src={dia}
                />
                <div className="pt-5">
                <p class="text-gray-700 text-base">
                Associate
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:wdiarra@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  WILLIAM DIARRA
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                  Year of Registration: 2021 

                  Email: wdiarra@cwg.co.zw

                  Qualifications: LLB(UCT)

                  Practice Areas :
                  General civil litigation, Labour law, Corporate and Commercial law, Mining law, Aviation law, Family law, Trusts, and Estate planning</p>
                  {show?
                  <p> William joined the Litigation and Commercial law Departments of the firm in June 2021. He has a keen interest in corporate and commercial law and has recently extended his practice areas to mining and aviation . </p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
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
                <p class="text-gray-700 text-base">
                Estate Administrator
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <a href="mailto:hbe@cwg.co.zw"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Email</span></a>
                    <a href="tel:+263242794930"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Call</span></a>
                  
              </div>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-base text-left">
                <div className="md:pr-12">                  
                  <h3 className=" font-semibold">
                  TAFADZWA R CHIKWAPE
                  </h3>
                  <p className="mt-4  leading-relaxed text-gray-600">
                   A registered Estate Administrator at Harare Board of Executors (Private) Limited. A company wholly owned by Coghlan, Welsh & Guest Legal Practitioners.

                   Joined the firm in 2003

                   Offers advice in Estate Planning and Administration.</p>
                  {show?
                  <p></p>
                  :null}
                   <button onClick={()=>setShow(!show)}>View all</button>
                 
                </div>
              </div>
            </div>
        </section>

            </SwiperSlide>





      </Swiper>
    </>
  );
}
