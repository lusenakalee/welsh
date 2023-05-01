import React from "react";
import { useState } from "react";
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
import Wellington from "../assets/Wellington.JPG";
import Taylor from "../assets/Taylor.jpg";
import Mduduzi from "../assets/Mduduzi.jpg";
import "../components/CarouselTeams.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

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
      "Admitted Legal Practitioner, Notary Public &amp; Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Conveyancing, Notarial Practice, Intellectual Property, Securities,Taxation, Trusts, Commercial and Corporate Law and Energy (oil, gas and electricity)",
  },
  {
    id: 3,
    name: "Nokhuthula Moyo",
    position: "Partner",
    imageSrc: Moyo,
    YOR: "1994",
    Qualifications: "LLBS (Hons) (Zim)",
    Status:
      "Admitted Legal Practitioner, Notary Public and Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "Labour and Employment Law, Dispute Resolution, Insolvency, Media and Human Rights",
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
  },
  {
    id: 9,
    name: "Daniel Matawu",
    position: "Partner",
    imageSrc: Daniel,
    YOR: "2016",
    Qualifications: "LLB (UL) LLM (UCT)",
    Status: "Admitted Legal Practitioner",
    MainPracticeAreas:
      "Commercial Law, Civil Litigation, Mining Law, Labour Law",
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
  },
  {
    id: 11,
    name: "Ennocent T Chidawanyika",
    position: "Associate",
    imageSrc: et,
    YOR: "2020",
    Qualifications: "LLB (UNISA) LLM (UCT)",
    Status:
      "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas: "Corporate and Commercial Law",
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
  },
  {
    id: 14,
    name: "William F.M. Diarra",
    position: "Associate",
    imageSrc: dia,
    YOR: "2022",
    Qualifications: "LLB (UCT)",
    Status:
      "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
    MainPracticeAreas:
      "General Civil Litigation, Labour law, Corporate and Commercial Law, Mining Law, Aviation law, Family Law, Trusts, and Estates Planning.",
  },
  {
    id: 15,
    name: "Mduduzi A. Ruwitah",
    position: "Associate",
    imageSrc: Mduduzi,
    YOR: "2023",
    Qualifications: "LLB LLM LLM (UCT)",
    Status:"Admitted Legal Practitioner in Zimbabwe",
    MainPracticeAreas: "Dispute Resolution, Criminal Law, Labour and Employment Law,Environmental Law, Media Law, Human Rights, General Practice",
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
  },
];

function CarouselTeams() {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(null);
  };

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
    <div>
      <Swiper
        className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        breakpoints={breakpoints}
       
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        scrollbar={{ draggable: true }}
        navigation={{ clickable: true }}
        autoplay={{ delay: 10000 }}
      >
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {team.map((member, id) => (
                <SwiperSlide className="flex max-w-xl px-16 flex-col items-start justify-between">
                  <div key={id} className="group relative">
                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={member.imageSrc}
                        alt={member.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div onClick={() => handleOpen(member.id)}>
                        <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {member.position}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 ">
                        <div className="border-2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                          <Dialog
                            open={open === member.id}
                            onClose={handleClose}
                          >
                            <DialogHeader>{member.name}</DialogHeader>
                            <DialogBody divider>
                              <div className="pt-2">
                                <p className=" flex text-sm text-left font-semibold leading-6 w-full text-gray-900">
                                  Year of Registration: {member.YOR}
                                </p>
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Qualifications: {member.Qualifications}
                                </p>
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Status: {member.Status}
                                </p>
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  Main Practice Areas:{" "}
                                  {member.MainPracticeAreas}
                                </p>
                              </div>
                            </DialogBody>
                            <DialogFooter>
                              <Button
                                variant="text"
                                color="red"
                                onClick={handleOpen}
                                className="mr-1"
                              >
                                <span>Cancel</span>
                              </Button>
                            </DialogFooter>
                          </Dialog>
                        </div>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default CarouselTeams;
