import { Disclosure } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Fraser from "../assets/Fraser.jpg";
import Mazingi from "../assets/Mazingi.jpg";
import Moyo from "../assets/Moyo.jpg";
import Andrew from "../assets/Andrew.jpg";
import Taylor from "../assets/Taylor.jpg";
import David from "../assets/David.jpg";
import Wellington from "../assets/Wellington.jpg";
import Matlida from "../assets/Matlida.jpg";
import Daniel from "../assets/Daniel.jpg";
import dc from "../assets/dc.jpg";
import et from "../assets/et.jpg";
import Lisa from "../assets/lisa.jpg";
import Samantha from "../assets/Samantha.jpg";
import dia from "../assets/dia.jpg";
import Trc from "../assets/Trc.jpg";

export default function Leadership() {
  const [openItem, setOpenItem] = useState(null);

  const handleDisclosureClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const leaders = [
    {
      name: "Fraser A. Edkins",
      role: "Senior Partner",
      imageUrl: Fraser,
      YOR: "1980",
      Qualifications: " BL (Hons) LLB (Rhodesia)",
      Status:
        "Admitted Legal Practitioner, Notary Public and Conveyancer in Zimbabwe",
      MainPracticeAreas: "Family/Matrimonial Law, Civil Litigation.",
    },
    {
      name: "Thembiwe C. Mazingi",
      role: "Managing Partner",
      imageUrl: Mazingi,
      YOR: "1982",
      Qualifications:
        "BL (Hons) LLB (Zim), MBA (UZ) Certificate in Advanced Taxation & VAT (UNISA), Certificate in Advanced Corporate & Securities Law (UNISA)",
      Status:
        "Admitted Legal Practitioner, Notary Public &amp; Conveyancer in Zimbabwe",
      MainPracticeAreas:
        "Conveyancing, Notarial Practice, Intellectual Property, Securities,Taxation, Trusts, Commercial and Corporate Law and Energy (oil, gas and electricity)",
    },
    {
      name: "Nokhuthula Moyo",
      role: "Partner",
      imageUrl: Moyo,
      YOR: "1994",
      Qualifications: "LLBS (Hons) (Zim)",
      Status:
        "Admitted Legal Practitioner, Notary Public and Conveyancer in Zimbabwe",
      MainPracticeAreas:
        "Labour and Employment Law, Dispute Resolution, Insolvency, Media and Human Rights",
    },

    {
      name: "Andrew P. Lane-Mitchell",
      role: "Partner",
      imageUrl: Andrew,
      YOR: "1986",
      Qualifications: "BA (Cape), BA LLB (Cape)",
      Status: "Admitted as Legal Practitioner in Zimbabwe",
      MainPracticeAreas:
        "Commercial/Corporate Law (IPOS, Project Finance, Mergers,Acquisitions, Corporate Restructuring, Joint Foreign Exchange and Banking)",
    },
    {
      name: "Margaret L. Taylor",
      role: "Partner",
      imageUrl: Taylor,
      YOR: "2001",
      Qualifications: "B Proc (SA)",
      Status:
        "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas: "Conveyancing and Notarial Practice",
    },
    {
      name: "David C. Dhumbura",
      role: "Partner",
      imageUrl: David,
      YOR: "2003",
      Qualifications: "LLBS (Hons) (Zim)",
      Status:
        "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas:
        "Criminal Law, Labour Law, Human Rights Law, and Media Law",
    },
    {
      name: "Wellington Magaya",
      role: "Partner",
      imageUrl: Wellington,
      YOR: "2008",
      Qualifications: "LLBS (Hons) (Zim), MBA (Zim)",
      Status:
        "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas:
        "Commercial law, Project Development and Financing, and Employment Law",
    },
    {
      name: "Nyadzisai M. Chikwene",
      role: "Partner",
      imageUrl: Matlida,
      Qualifications: "LLB (UNISA)",
      Status:
        "Admitted as a Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas:
        "Intellectual Property, Property Law, Conveyancing, Trusts",
    },
    {
      name: "Daniel Matawu",
      role: "Partner",
      imageUrl: Daniel,
      YOR: "2016",
      Qualifications: "LLB (UL) LLM (UCT)",
      Status: "Admitted Legal Practitioner",
      MainPracticeAreas:
        "Commercial Law, Civil Litigation, Mining Law, Labour Law",
    },
    {
      name: "Dillon Chemhere",
      role: "Associate",
      imageUrl: dc,
      YOR: "2021",
      Qualifications: "LLB (UNISA)",
      Status: "Admitted Legal Practitioner",
      MainPracticeAreas: "Commercial/Corporate Law, General Practice",
    },
    {
      name: "Ennocent T Chidawanyika",
      role: "Associate",
      imageUrl: et,
      YOR: "2020",
      Qualifications: "LLB (UNISA) LLM (UCT)",
      Status:
        "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas: "Corporate and Commercial Law",
    },
    {
      name: "Lisa B. Zvinavashe",
      role: "Associate",
      imageUrl: Lisa,
      YOR: "2021",
      Qualifications: "LLB (UNISA)",
      Status: "Admitted Legal Practitioner in Zimbabwe",
      MainPracticeAreas:
        "labour law, criminal law, company law and civil litigation.",
    },
    {
      name: "Samantha Mbauya",
      role: "Associate",
      imageUrl: Samantha,
      YOR: "2022",
      Qualifications: "LLBS (Hons) (Zim)",
      Status:
        "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas: "lLegal Practitioner, Conveyancer and Notary Public.",
    },
    {
      name: "William F.M. Diarra",
      role: "Associate",
      imageUrl: dia,
      YOR: "2022",
      Qualifications: "LLB (UCT)",
      Status:
        "Admitted Legal Practitioner, Notary Public, and Conveyancer in Zimbabwe",
      MainPracticeAreas:
        "General Civil Litigation, Labour law, Corporate and Commercial Law, Mining Law, Aviation law, Family Law, Trusts, and Estates Planning.",
    },
    {
      name: "TAFADZWA R CHIKWAPE",
      role: "Estate Administrator",
      imageUrl: Trc,
      YOR: "2003",
      Qualifications: "",
      Status:
        "registered Estate Administrator at Harare Board of Executors (Private) Limited",
      MainPracticeAreas: "Estate Planning and Administration.",
    },
  ];

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {leaders.map((leader, index) => (
              <li key={index} className="w-full text-left px-4">
                <Disclosure
                  defaultOpen={openItem === index}
                  onChange={() => handleDisclosureClick(index)}
                  className="relative "
                >
                  {({ open }) => (
                    <>
                      <div className="text-left gap-x-6">
                        <Disclosure.Button>
                          <div className="flex">
                            <img  className="h-16 w-20 rounded-full" src={leader.imageUrl} alt=""/>
                            <div className="pl-2 pt-2" >
                              <h3 className="text-base font-semibold text-left leading-7 tracking-tight text-gray-900">
                                {leader.name}
                              </h3>
                              <p className="text-sm font-semibold text-left leading-6 text-indigo-600">
                                {leader.role}
                              </p>
                        
                            </div>
                            <div className="pt-4">
                            <ChevronUpDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5 text-gray-500`}
                          />
                          </div>
                          </div>

                        </Disclosure.Button>
                        <Disclosure.Panel className="px-10 pt-2 pb-2 text-sm text-gray-500">
                          <div className="pt-2">
                            <p className=" flex text-sm text-left font-semibold leading-6 w-full text-gray-900">
                              Year of Registration: {leader.YOR}
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              Qualifications: {leader.Qualifications}
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              Status: {leader.Status}
                            </p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              Main Practice Areas: {leader.MainPracticeAreas}
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
