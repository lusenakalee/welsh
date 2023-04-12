import React ,{ Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function ExpertiseAccordion() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <React.Fragment>
      <div className="text-left">

      <Accordion open={open === 1}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(1)}>
        Infrastructure/PPP
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Our lawyers have extensive experience across a broad range of contractual arrangements for
PPP projects. This includes experience in road, water, energy and other infrastructure sectors.
Given our experience in a diverse range of areas, our PPP practice is complemented by our
lawyers in other practice areas such as property, tax planning, finance and regulatory work. We
regularly assist clients in drafting and reviewing lease agreements, project contracts,
construction, operation & maintenance contracts, joint venture agreements. In addition to that we
advise on bank and capital markets financing, as well as exchange control and other financial
services regulatory issues.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(2)}>
        Mining & Renewable Energy
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Coghlan Welsh & Guest has an outstanding energy, mining and commodities practice,
representing lenders, developers and sponsors in significant projects in Zimbabwe. The Practice
has been involved in oil, gas and power projects in the country, and has represented many local
regional and international oil companies in drafting; review of agreements and contracts and due
diligence reports. The firm has been involved in the mining sector for several years, advising on
mining rights and laws, buying, selling, financing and developing projects in the most important
mining jurisdictions. The team advises on all matters pertaining to mining and minerals resource,
oil and gas, including corporate and transactional, finance, environmental, tax planning,
regulatory, health and safety and litigation and dispute resolution. We advise government
agencies, parastatals, utilities, project sponsors and developers, lenders, institutional investors,
contractors and operators on general corporate and regulatory matters, tendering and
procurement, project structuring and delivery, project finance, PPA, EPC and O&M agreements,
fuel supply and power off-take and the resolution of disputes relating to construction and power
generation. We also advise in more specialist areas such as local social and environmental
matters and compliance with international standards
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(3)}>
        Banking & Finance
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Coghlan Welsh & Guest has a prominent banking and finance practice with a thorough
understanding of both corporate and project financing. We advise in a broad spectrum of finance
work including acquisition finance, asset finance, cross-border finance, capital markets, export
credit finance and project finance. The firm advises a wide spectrum of clients including listed
companies; major corporate entities both local and international; insurance companies; energy
companies (in solar, hydro, oil and gas); local, regional & international Banks (commercial,
merchant, developmental and the central bank); Pension Funds; SME’s; Mining Companies and
NGO’s. Our banking and finance team includes a core group of lawyers, but each team is
supported by specialists from other key areas of practice. Our approach is to draw on our
collective and diverse experience to provide our clients with practical and strategic advice that
helps to achieve the client’s business needs.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(4)}>
        Property
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Our firm is well placed to attend to conveyancing work i.e. transfers, registration and cancellation
of mortgage bonds and other securities, sectional title, subdivisions and consolidations. The firm
has been involved in many development schemes including staff loan schemes for big
corporations, banks and similar organizations. Our property law offering also includes landlord
and tenant law. The practice is quite extensive, ranging from drafting and review of lease

agreements, cessions and assignment of leases, litigation in landlord and tenant disputes,
evictions, and representations in alternative dispute resolution. The firm has collective
experience of several years in drafting and reviewing lease agreements and also advising
pension funds, and large property companies both international and domestic in respect of their
property related issues.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(5)}>
        Financial Services & Regulatory
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Given the diversity of our lawyers in experience and expertise, we are able to advise people
across a number of key areas. We always aim to provide our clients with strategic legal advice
aimed at balancing between the client’s commercial needs and the need to have sound credit
and investment policy and compliance with regulatory requirements. Our team has the
experience and capability to guide clients in exchange control, indigenisation laws, insider
dealing and market manipulation laws, public policy and regulatory sanctions.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(6)}>
        Capital Markets
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Our Capital Markets lawyers advise in a broad range of capital markets work, from debt and
equity financing, securitisation and structured debt, private equity and high yield investments. We
also provide advice in mergers and acquisitions, corporate, compliance (including taxation and
competition issues), commercial drafting, and related litigation. We have a wide ranging client
base which includes key market participants such as major international financial institutions,
local banks and financial institutions, major corporates (both local and international), existing
and new entrants to the stock exchange and in the capital markets.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(7)}>
        Arbitration & Commercial Dispute Resolution
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Our commercial litigation team has a thriving practice across a broad range of commercial
disputes, including frequent high value and complex work in the High Court and in arbitration
proceedings. We also regularly act in matters ranging from sizeable contractual disputes
between large companies, foreign entities and banks, through to small start-ups, whether based
in Zimbabwe or abroad. We litigate in a broad range of commercial and civil law areas including
finance litigation, construction, insurance, property law disputes, procurement and intellectual
property disputes. Our team draws upon the skills and experience from colleagues in other
practice areas to ensure that we provide a comprehensive, and expert, approach to problem
solving. Our members have experience as sole counsel, or led by members of the Bar, in all the
courts in Zimbabwe.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(8)}>
        Intellectual Property
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Coghlan Welsh & Guest offers service in intellectual property registration (locally, regionally and
internationally), advisory, assignment and cession of intellectual property, management and
maintenance of intellectual property portfolios on behalf of clients. The Practice deals in all
intellectual law aspects namely patents, trademarks, copyright, industrial designs and
geographical indications. The practice has established relations with local, regional and
international Intellectual Property law practitioners. We also have functional relations with WIPO,
ARIPO and ZIPO and our teams regularly attend seminars and workshops with these
organizations. Our intellectual Property Law team is well equipped with many years of collective
experience.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(9)}>
        Employment
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Our experienced employment specialists work with clients from a wide range of sectors to
address local and cross-border issues in all aspects of employment law, including drafting local
and cross border employment contracts and employee policies and procedures, consulting
agreements and restraints of trade, advising on restructuring and retrenchments;

executive compensation, pensions, drafting and review of employment contracts, industrial
relations, disciplinary procedures, human resources policy formulation and advise, collective
action negotiations and bargaining, termination proceedings, retrenchment and dispute
resolution and employee share incentive schemes. Our team also has many years of experience
in labour litigation and alternative dispute resolution, compliance, training and education.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(10)}>
        Tax Planning
        </AccordionHeader>
        <AccordionBody className='text-white'>
        We provide expert advice in relation to areas of tax planning, such as: Corporate Tax, project
finance, tax due diligence, international tax, VAT compliance reviews, advice and support, tax and
regulatory requirements, transfer pricing customs and excise compliance reviews, advice and
support and tax dispute resolution.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(11)}>
        Bankruptcy, Insolvency & Restructuring
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Coghlan, Welsh & Guest’s insolvency practice covers all aspects of liquidations, formal and
informal distressed restructuring, estate sequestrations and surrender, judicial
managements and schemes of arrangements and offers of compromise. The firm has been
involved and advised in the liquidations and judicial managements of numerous entities in
Zimbabwe including banking institutions and companies both listed and private.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(12)}>
        Technology, Media & Telecommunications
        </AccordionHeader>
        <AccordionBody className='text-white'>
        The firm has experience in advising clients in this sector on a wide range of issues.We
provide effective legal solutions in data and information privacy and protection,technology
transactions and governance ,software licensing ,ICT-related due diligence, e-commerce,
media and broadcasting licensing and regulation, telecommunications corporate,
commercial ,compliance and regulatory advice.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 13}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(13)}>
        Environmental Law
        </AccordionHeader>
        <AccordionBody className='text-white'>
        We do pre-acquisition environmental due diligence audits, environmental impact assessment
compliance, environmental risk and identification and mitigation strategies, administrative
appeals and reviews of administrative decisions, water law and policy, hazardous waste
management and importation and transit of hazardous substances        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(14)}>
        Cyber Security & Commercial Crime
        </AccordionHeader>
        <AccordionBody className='text-white'>
        Our team assists clients with risk identification and mitigation strategies, legal compliance,
assistance during government investigations, enforcement actions and litigation. We have
specialist criminal defence attorneys who practise in all courts throughout Zimbabwe in all
courts in Zimbabwe. Immigration matters are also handled by this specialist division.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 15}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(15)}>
        Family Law
        </AccordionHeader>
        <AccordionBody className='text-white'>
        This division is headed by the firms senior partner who is widely respected and considered the
best family lawyer in Zimbabwe. We advise and litigate on all matrimonial issues in all courts. We
have handled high profile cases most which are reported in the Zimbabwe law reports are very
proud of the contribution we have made in the development on the law in area.        </AccordionBody>
      </Accordion>
      <Accordion open={open === 16}>
        <AccordionHeader className='text-white'onClick={() => handleOpen(16)}>
        Trusts & Estate Planning
        </AccordionHeader>
        <AccordionBody className='text-white'>
        We own the Harare Board of Executors (Pvt.) Ltd which provides advisory services in estate
planning, processing and management related matters including wills, trusts, donations,
registration and administration of estates and executor services. The company is manned by an
experienced administrator who worked for several years in the Office of the Master of the High
Court.        </AccordionBody>
      </Accordion>
      </div>
  
    </React.Fragment>
  );
}
