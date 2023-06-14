import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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
import Mduduzi from "../assets/Mduduzi.jpg";
import "../components/CarouselTeams.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Scrollbar,
  A11y,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const team = [
  {
    id: 1,
    name: "Fraser A. Edkins",
    position: "Senior Partner",
    imageSrc: Fraser,
    YOR: "1980",
    Qualifications: " BL (Hons) LLB (Rhodesia)",
    Status:
      "Admitted Legal Practitioner, Notary Public and Conveyancer in Zimbabwe",
    MainPracticeAreas: "Family/Matrimonial Law, Civil Litigation.",
    description: `Fraser Edkins became the firm’s senior partner and chairman on the 1st of January 2016. Prior to assuming his new role Fraser was in general practice (including Criminal Law) and then moved to head the firm’s Family Law practice specializing in matrimonial litigation. Fraser is a Committee member and past Chairman of the History Society of Zimbabwe and Editor of its annual journal. Before joining the firm in 1985, Fraser was a Judge’s Clerk, a Public Prosecutor and a Provincial Magistrate for 12 years. Fraser has a wealth of experience in general civil litigation and is considered one of the country’s leading divorce attorneys. He enjoys his garden and social tennis and golf. He has been married to Maureen for 40 years and their daughter is a Professor of Biochemistry at Rhodes University in South Africa.`,
  },
  {
    id: 2,
    name: "Thembiwe C. Mazingi",
    position: "Managing Partner",
    imageSrc: Mazingi,
    YOR: "1982",
    Qualifications:
      "BL (Hons) LLB (Zim), MBA (UZ) Certificate in Advanced Taxation & VAT (UNISA), Certificate in Advanced Corporate & Securities Law (UNISA)",
    Status:
      "Admitted Legal Practitioner, Notary Public & Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Conveyancing, Notarial Practice, Intellectual Property, Securities,Taxation, Trusts, Commercial and Corporate Law and Energy (oil, gas and electricity)",
    description: `Thembiwe leads the intellectual property division of the firm and has many years of experience in conveyancing and property law. Thembiwe sits on various boards including Ariston Holdings Limited, NICOZ Diamond Insurance Limited (where she is Deputy Chairperson of the Board), African Century Limited and the Innscor Limited Group. Thembiwe’s past directorships include Zimbabwe Allied Banking Group Limited, Fidelity Asset Management and Zimbabwe Electricity Supplies Authority and National Tyre Services. Thembiwe is an avid member of the International Bar Association in which she is a member of the African Regional, Mergers and Acquisitions and Practise Management Forums and Committees.`,
  },
  {
    id: 3,
    name: "Nokuthula Moyo",
    position: "Partner",
    imageSrc: Moyo,
    YOR: "1994",
    Qualifications: "LLBS (Hons) (Zim)",
    Status:
      "Admitted Legal Practitioner, Notary Public and Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Labour and Employment Law, Dispute Resolution, Insolvency, Media and Human Rights",
    description: `Nokuthula Moyo is one of Zimbabwe’s leading employment lawyers and heads the firm’s Employment department. She has extensive experience in all aspects of employment law, including drafting local and cross border employment contracts and employee policies and procedures, consulting agreements and restraints of trade; furnishing advice on restructuring and retrenchments; furnishing advice on the employment law implications of the transfer of a business as a going concern; conducting due diligence exercises from an employment law perspective, She litigates in all tribunals and Courts in Zimbabwe. 

      Nokuthula is also a human rights activist and is a past chairperson of the Zimbabwe Lawyers for Human Rights.`,
  },

  {
    id: 4,
    name: "Andrew P. Lane-Mitchell",
    position: "Partner",
    imageSrc: Andrew,
    YOR: "1986",
    Qualifications: "BA (Cape), BA LLB (Cape)",
    Status: "Admitted as Legal Practitioner in Zimbabwe",
    MainPracticeAreas:
      "Commercial/Corporate Law (IPOS, Project Finance, Mergers,Acquisitions, Corporate Restructuring, Joint Foreign Exchange and Banking)",
    description: `Andrew Paul Lane-Mitchell is one of the Lead Partners of the firm’s corporate and commercial law division having practiced in many years in the corporate sector. Andrew’s experience includes being the Group Legal Counsel for Meikles Limited (listed on the Zimbabwe and London Stock Exchanges) and Corporate Finance Manager for Stanbic Zimbabwe Limited, one of Zimbabwe’s leading retail banks and a division of Standard Bank South Africa, which positions he held before joining the firm’s corporate law team.`,
  },
  {
    id: 5,
    name: "Margaret L. Taylor",
    position: "Partner",
    imageSrc: Taylor,
    YOR: "2001",
    Qualifications: "B Proc (SA)",
    Status:
      "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas: "Conveyancing and Notarial Practice",
    description: ``,
  },
  {
    id: 6,
    name: "David C. Dhumbura",
    position: "Partner",
    imageSrc: David,
    YOR: "2003",
    Qualifications: "LLBS (Hons) (Zim)",
    Status:
      "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Criminal Law, Labour Law, Human Rights Law, and Media Law",
    description: `David leads the firm’s criminal law department and has a wealth of knowledge and experience in criminal law and procedure having served as a magistrate for many years before joining private practice.`,
  },
  {
    id: 7,
    name: "Wellington Magaya",
    position: "Partner",
    imageSrc: Wellington,
    YOR: "2008",
    Qualifications: "LLBS (Hons) (Zim), MBA (Zim)",
    Status:
      "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Commercial law, Project Development and Financing, and Employment Law",
    description: ` He has advised major local and international corporates in the commodities and renewable energy sectors. He has been involved in the negotiation, structuring and advising clients in high value transactions and in respect of all regulatory requirements. He also boasts of vast experience in all aspects of employment law ranging from drafting local and cross border employment contracts and employee policies and procedures, consulting agreements and restraints of trade; advising on restructuring and retrenchments; furnishing advice on the employment law implications in acquisitions and transfer of businesses; conducting due diligence exercises from both a lender and an employment law perspective. He has over the years been involved in commercial and employment dispute resolution in both local and international tribunals. 

      Wellington currently sits on the council of the Law Society of Zimbabwe where we he serves in the Finance and Administration Committee as well as the Liaison and Publicity Committees.`,
  },
  {
    id: 8,
    name: "Nyadzisai M. Chikwene",
    position: "Partner",
    imageSrc: Matlida,
    Qualifications: "LLB (UNISA)",
    Status:
      "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Intellectual Property, Property Law, Conveyancing, Trusts",
    description: `Intellectual Property
      Nyadzi specialises in intellectual property registration (locally, regionally and internationally), advisory, assignment and cession of intellectual property, management and maintenance of intellectual property portfolios on behalf of clients.  She provides advice on initial registration and renewal of IP rights both locally and internationally; purchase, transfer and licensing of IP rights; IP portfolio management; enforcement of IP rights; due diligence investigations; licensing; confidential information protection; restraints of trade; sponsorship agreements; product design protection; commercial agreements relating to IP and franchising.  Nyadzi has also participated in the formulation of laws and policies on intellectual property in Zimbabwe and ARIPO and have established relations with local, regional and international Intellectual Property law practitioners. 
      
      She has successfully represented both local individuals and big foreign corporations in the registration and prosecution against infringement of their trademarks and patents both at the local Registry up to the High Courts.
      
      Conveyancing
      She has been involved in registration of securities for large financing transactions as well as registration of transfers from sales, donations and estates.
      
      Notarial Work
      Nyadzi also advises on formation and registration of charitable or family Trusts together with all Notarial duties.`,
  },
  {
    id: 9,
    name: "Daniel Matawu",
    position: "Partner",
    imageSrc: Daniel,
    YOR: "2016",
    Qualifications: "LLB (UL) LLM (UCT)",
    Status: "Admitted Legal Practitioner",
    MainPracticeAreas: "Commercial Law, Civil Litigation, Mining Law, Labour Law",
    description: `Daniel joined the firm in 2016 and steadily rose through the ranks into Partnership in 2022.
    During Daniel’s tenure with the firm, he has had the opportunity to oversee high value commercial litigation some of which involving local and international corporates.
    Daniel also has vast experience in employment law where he has had advised on issues to do with restructuring and retrenchment just to mention a few. From a compliance perspective, Daniel has worked in house for a multinational corporation. Through the in-house experience he has managed to “sharpen his eye” and be better placed to identify risk and to deal with all related compliance issues.
    In his spare time, he enjoys watching and playing sport. His enjoyment of sport has driven him to work towards the establishment of the firm’s sports law department.`,
  },
  {
    id: 10,
    name: "Dillon Chemhere",
    position: "Associate",
    imageSrc: dc,
    YOR: "2021",
    Qualifications: "LLB (UNISA)",
    Status: "Admitted Legal Practitioner",
    MainPracticeAreas: "Commercial/Corporate Law, General Practice",
    description: `Dillon joined the firm in 2020. As an Associate, he has been working in Corporate and Commercial Law department where he has dealt with various issues of general company law, drafting, and reviewing of agreements related to commercial transactions. Dillon is also interested in litigation work.`,
  },
  {
    id: 11,
    name: "Ennocent T Chidawanyika",
    position: "Associate",
    imageSrc: et,
    YOR: "2020",
    Qualifications: `
     LLB Cum laude (UNISA), 
     LLM (Law of Mineral and Petroleum Extract and Use) – UCT, 
     PhD Mining Law candidate- UCT, 
     Bsc Economics – UZ,
     MSc Economics – UZ,
     MBA (Banking & Finance) – NUST,
     C.A.I.B. (SA),
     A.I.O.B.(ZIM)`,
    Status:
      "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas: "Corporate & Commercial Lawyer| Mining Law Expert| Chartered Banker\Economist",
    description: `
    Ennocent Chidawanyika is Coghlan, Welsh & Guest’s Commercial and Corporate lawyer making sure of seamless delivery of effective solutions for clients across boundaries.
His expertise covers the cycle of mining – from exploration, mining, and beneficiation to downscaling and closure. His experience ranges from start-up exploration projects to well-established mining projects, and he acts for a wide range of mining companies in all mineral commodity sectors, including the base and precious metals, coal, rare earths, sand and diamonds sectors.
Ennocent’s expertise includes advising on mining aspects of equity and asset acquisitions, disposals and corporate restructuring, as well as on distressed mining assets and on royalties in the mining sector. His experience further includes all aspects of regulatory work in the mining and petroleum (upstream) industries, for senior, mid-tier and junior companies, as well as for financial institutions regarding banking and resource-finance projects.
Ennocent has done mining title and transactional work in Southern Africa. He has also advised on joint ventures in Zimbabwe and Namibia in addition to advising on the mineral regulatory framework.
Before joining the legal field, Ennocent was prominent Senior Corporate Banking Executive who worked for International and local banks and consulted for a regional bank.
Ennocent is regularly invited by a regional University to lecture and present papers in the field of mining law and is very widely read. He is recognised as a leading/recommended lawyer by various natural resources institutes.
He is a full member of the International Bar Association (IBA) with committee membership in Mining Law, Corporate and M & A Law, and Banking Law.
Ennocent was inducted into the Golden Key International Honour Society, which is the world’s largest collegiate honor society for graduates.`,
  },
  {
    id: 12,
    name: "Lisa B. Zvinavashe",
    position: "Associate",
    imageSrc: Lisa,
    YOR: "2021",
    Qualifications: "LLB (UNISA)",
    Status: "Admitted Legal Practitioner in Zimbabwe",
    MainPracticeAreas:
      "labour law, criminal law, company law and civil litigation.",
    description: ``,
  },
  {
    id: 13,
    name: "Samantha Mbauya",
    position: "Associate",
    imageSrc: Samantha,
    YOR: "2022",
    Qualifications: "LLBS (Hons) (Zim)",
    Status:
      "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas: "lLegal Practitioner, Conveyancer and Notary Public.",
    description: ``,
  },
  {
    id: 14,
    name: "William F.M. Diarra",
    position: "Associate",
    imageSrc: dia,
   
    Qualifications: "LLB (UCT)",

    MainPracticeAreas:
      "General Civil Litigation, Labour law, Corporate and Commercial Law, Mining Law, Aviation law, Family Law, Trusts, and Estates Planning.",
    description: `William joined the Litigation and Commercial law Departments of the firm in June 2021. He has a keen interest in corporate and commercial law and has recently extended his practice areas to mining and aviation .`,
  },
  {
    id: 15,
    name: "Mduduzi A. Ruwitah",
    position: "Associate",
    imageSrc: Mduduzi,
    YOR: "2023",
    Qualifications: "LLB LLM LLM (UCT)",
    Status: "Admitted Legal Practitioner in Zimbabwe",
    MainPracticeAreas:
      "Dispute Resolution, Criminal Law, Labour and Employment Law,Environmental Law, Media Law, Human Rights, General Practice",
    description: ``,
  },
  {
    id: 16,
    name: "Tafadzwa R Chikwape",
    position: "Estate Administrator",
    imageSrc: Trc,
    YOR: "2003",
    Qualifications: "",
    Status:
      "registered Estate Administrator at Harare Board of Executors (Private) Limited",
    MainPracticeAreas: "Estate Planning and Administration.",
    description: ``,
  },
];

function CarouselTeams() {
  const [open, setOpen] = useState(false);

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={breakpoints}
        autoplay={{
          delay: 3000,
        }}
        navigation
      >
        {team.map((member) => (
          <SwiperSlide
            key={member.id}
            className="flex max-w-xl px-16 flex-col items-start justify-between"
          >
            <div className="slide-content ">
              <div className=" min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  onClick={() => setOpen(member.id)}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                />
              </div>
              <div className="slide-info mt-10 flex justify-between">
                <h3 className="text-sm text-gray-700">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{member.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {team.map((member, id) => (
          <Transition.Root
            key={member.id}
            show={open === member.id}
            as={Fragment}
          >
            <Dialog
              key={id}
              as="div"
              className="relative z-10"
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                            <button
                              type="button"
                              className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <div className="bg-white">
                              <div className="pt-6">
                                {/* Image gallery */}
                                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl ">
                                  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                      <img
                                        src={member.imageSrc}
                                        alt={member.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* Product info */}
                                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:pb-24 lg:pt-16">
                                  <div className=" lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                      {member.name}{" "}
                                    </h1>
                                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                                      {member.position}
                                    </h1>
                                  </div>

                                  <div className="py-10 lg:col-start-1 lg:pb-16 lg:pr-4 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                      <h3 className="sr-only">Description</h3>
                                      <div className="space-y-6">
                                        {member.description
                                          .split("\n")
                                          .map((paragraph, index) => (
                                            <p
                                              className="text-base text-gray-900"
                                              key={index}
                                            >
                                              {paragraph.trim()}
                                            </p>
                                          ))}
                                      </div>
                                    </div>

                                    {member.YOR ||
                                    member.Qualifications ||
                                    member.Status ||
                                    member.MainPracticeAreas ? (
                                      <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">
                                          Highlights
                                        </h3>
                                        <div className="mt-4">
                                          <ul
                                            role="list"
                                            className="list-disc space-y-2 pl-4 text-sm"
                                          >
                                            {member.YOR && (
                                              <li className="text-gray-400">
                                                <span className="text-gray-600">
                                                  Year of Registration:{" "}
                                                  {member.YOR}
                                                </span>
                                              </li>
                                            )}
                                            {member.Qualifications && (
                                              <li className="text-gray-400">
                                                <span className="text-gray-600">
                                                  Qualifications:{" "}
                                                  {member.Qualifications}
                                                </span>
                                              </li>
                                            )}
                                            {member.Status && (
                                              <li className="text-gray-400">
                                                <span className="text-gray-600">
                                                  Status: {member.Status}
                                                </span>
                                              </li>
                                            )}
                                            {member.MainPracticeAreas && (
                                              <li className="text-gray-400">
                                                <span className="text-gray-600">
                                                  Main Practice Areas:{" "}
                                                  {member.MainPracticeAreas}
                                                </span>
                                              </li>
                                            )}
                                          </ul>
                                        </div>
                                      </div>
                                    ) : null}

                                    <div className="mt-10">
                                      <h2 className="text-sm font-medium text-gray-900"></h2>

                                      <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600"></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselTeams;
