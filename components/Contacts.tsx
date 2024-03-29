import React from "react";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { Button } from "@nextui-org/react";

export enum Name {
  LinkedIn = "LinkedIn",
  GitHub = "GitHub",
  Email = "Email",
  Call = "Call",
  Portfolio = "Portfolio",
}

type ContactProps = {
  name: string;
  url: string;
};

const Contacts = ({ name, url }: ContactProps) => {
  return (
    <div>
      {name === Name.Call && (
        <Button
          variant="faded"
          color="default"
          size="sm"
          radius="md"
          className="py-8 bg-white bg-opacity-5">
          <div className="flex flex-col justify-center items-center gap-1  ">
            <IoIosCall size={18} />
            <a href={`tel:${url}`} className="text-[10px] ">
              Call
            </a>
          </div>
        </Button>
      )}
      {name === Name.LinkedIn && (
        <Button
          variant="faded"
          color="default"
          size="sm"
          radius="md"
          className="py-8 bg-white bg-opacity-5">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <FaLinkedin size={18} />
            <a href={`${url}`} className="text-[10px] ">
              Linkedin
            </a>
          </div>
        </Button>
      )}

      {name === Name.GitHub && (
        <Button
          variant="faded"
          color="default"
          size="sm"
          radius="md"
          className="py-8 bg-white bg-opacity-5">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <FaGithub size={18} />
            <a href={`${url}`} className="text-[10px] ">
              Github
            </a>
          </div>
        </Button>
      )}
      {name === Name.Email && (
        <Button
          variant="faded"
          color="default"
          size="sm"
          radius="md"
          className="py-8 bg-white bg-opacity-5">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <IoMdMail size={18} />
            <a href={`${url}`} className="text-[10px] ">
              Email
            </a>
          </div>
        </Button>
      )}

      {name === Name.Portfolio && (
        <Button
          variant="faded"
          color="default"
          size="sm"
          className="py-8 bg-white bg-opacity-5">
          <div className="flex flex-col justify-center items-center gap-1 ">
            <BsGlobe size={18} />
            <a href={`${url}`} className="text-[10px] ">
              Portfolio
            </a>
          </div>
        </Button>
      )}
    </div>
  );
};

export default Contacts;
