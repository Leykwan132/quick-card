"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaClinicMedical } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { IoMdRestaurant } from "react-icons/io";
import { Image } from "antd";
import {
  insurance,
  education,
  event,
  medical,
  restaurant,
  workforce,
} from "@/public/images";
interface Props {
  // Define your component props here
}
const renderWorkforce = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/images/workforce.png"
        width={110}
        alt="Picture of the author"
        className="p-1"
      />
      <div className="flex flex-col gap-2">
        <h2>Secure Access Passes</h2>
        <p className="tracking-tight text-small text-default-400">
          Quickcard's digital passes simplify workplace entry for streamlined
          operations.
        </p>
      </div>
    </div>
  );
};

const renderMedical = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/images/medical.png"
        width={110}
        alt="Picture of the author"
        className="p-1"
      />
      <div className="flex flex-col gap-2">
        <h2>Mobile Health Passes</h2>
        <p className="tracking-tight text-small text-default-400">
          Securely store patient health information and appointments on their
          smartphones.
        </p>
      </div>
    </div>
  );
};

const renderEvents = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/images/event.png"
        width={110}
        alt="Picture of the author"
        className="p-1"
      />
      <div className="flex flex-col gap-2">
        <h2>Virtual Event Tickets</h2>
        <p className="tracking-tight text-small text-default-400">
          Effortlessly access event tickets on mobile devices for seamless
          entry.
        </p>
      </div>
    </div>
  );
};

const renderInsurance = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/images/insurance.png"
        width={110}
        alt="Picture of the author"
        className="p-1"
      />
      <div className="flex flex-col gap-2">
        <h2>Instant Medical Card</h2>
        <p className="tracking-tight text-small text-default-400">
          Access medical insurance information and benefits on-the-go.
        </p>
      </div>
    </div>
  );
};

const renderEducation = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/images/education.png"
        width={110}
        alt="Picture of the author"
        className="p-1"
      />
      <div className="flex flex-col gap-2">
        <h2>Student ID Passes</h2>
        <p className="tracking-tight text-small text-default-400">
          Access student IDs and campus information conveniently on smartphones.
        </p>
      </div>
    </div>
  );
};

const renderRestaurant = () => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        src="/images/restaurant.png"
        width={110}
        alt="Picture of the author"
        className="p-1"
      />
      <div className="flex flex-col gap-2">
        <h2>Digital Loyalty Cards</h2>
        <p className="tracking-tight text-small text-default-400">
          Earn and redeem rewards seamlessly with digital loyalty cards.
        </p>
      </div>
    </div>
  );
};
const Page: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center h-screen gap-10 p-10 px-6 text-black sm:px-10 dark:text-white dark:bg-slate-900 bg-slate-100 ">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Solutions</h1>
        <p className="tracking-tight text-default-400">
          At Quickcard, we accomodate different needs for different industry.
        </p>
      </div>
      <Accordion variant="shadow">
        <AccordionItem
          startContent={<FaClinicMedical size={24} />}
          subtitle="1 use cases"
          key="2"
          aria-label="Accordion 2"
          title="Medical">
          {renderMedical()}
        </AccordionItem>
        <AccordionItem
          startContent={<BsCalendarEventFill size={24} />}
          subtitle="1 use cases"
          key="3"
          aria-label="Accordion 3"
          title="Events">
          {renderEvents()}
        </AccordionItem>
        <AccordionItem
          startContent={<FaHouse size={24} />}
          subtitle="1 use cases"
          key="4"
          aria-label="Accordion 3"
          title="Insurance">
          {renderInsurance()}{" "}
        </AccordionItem>

        <AccordionItem
          startContent={<IoIosSchool size={24} />}
          subtitle="1 use cases"
          key="6"
          aria-label="Accordion 3"
          title="Education">
          {renderEducation()}
        </AccordionItem>
        <AccordionItem
          startContent={<IoMdRestaurant size={24} />}
          subtitle="1 use cases"
          key="7"
          aria-label="Accordion 3"
          title="Restaurant">
          {renderRestaurant()}
        </AccordionItem>
        <AccordionItem
          startContent={<FaPeopleGroup size={24} />}
          subtitle="1 use cases"
          key="1"
          aria-label="Accordion 1"
          title="Workforce">
          {renderWorkforce()}
        </AccordionItem>
      </Accordion>{" "}
    </div>
  );
};

export default Page;
