"use client";
import { useState } from "react";
import { Button, ButtonGroup, Chip, Image } from "@nextui-org/react";
import { BsBuildingsFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
  Link,
  Divider,
  User,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ContactType } from "@/types";
import Contacts from "@/components/Contacts";
type SocialUrl = {
  name: ContactType;
  url: string;
};

const socialUrls: SocialUrl[] = [
  { name: ContactType.Call, url: "+16089600349" },
  { name: ContactType.Email, url: "mailto:leykwan132@gmail.com" },
  { name: ContactType.GitHub, url: "https://github.com" },
  { name: ContactType.LinkedIn, url: "https://www.linkedin.com/in/johndoe" },
  { name: ContactType.Portfolio, url: "https://twitter.com" },
];

export default function Page({ params }: { params: { user: string } }) {
  const router = useRouter();
  const fetchVCard = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "John",
          lastName: "Doe",
          workPhone: "1234567890",
          organization: "Acme Inc.",
          photo: "https://example.com/photo.jpg",
        }),
      });
      const blob = await response.blob(); // Get the vCard as a Blob
      return blob;
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddToContact = async () => {
    try {
      const vCard = await fetchVCard();
      const a = document.createElement("a");
      const url = window.URL.createObjectURL(vCard);
      a.href = url;
      a.download = "contact.vcf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="relative  flex flex-col justify-center items-center gap-2">
      <div className=" px-4 flex flex-col justify-center items-center  gap-4 pb-5 bg-slate-700 w-full">
        <Popover showArrow offset={10} placement="bottom-start" backdrop="blur">
          <PopoverTrigger>
            <Button
              className="absolute top-10 left-6"
              variant="solid"
              startContent={<BsBuildingsFill />}
              color="warning"
              size="sm">
              Quickcard
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px]">
            <div className="px-1 py-2 w-full">
              <Link
                className="font-bold text-medium text-foreground gap-2"
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
                anchorIcon={<FiArrowUpRight />}>
                Quickcard{" "}
              </Link>
              <h5 className="text-small tracking-tight text-default-400">
                Quickcard is a technology company that focuses on creating the
                next generation of digital wallet assets.
              </h5>
            </div>
          </PopoverContent>{" "}
        </Popover>
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            className="mt-20"
            radius="full"
            width={170}
            height={170}
            alt="NextUI hero Image with delay"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-row items-center gap-2">
              <Chip
                color="secondary"
                size="md"
                variant="flat"
                radius="sm"
                className="text-xs"
                startContent={<MdOutlineWork size={18} />}>
                {" "}
                Staff Engineer{" "}
              </Chip>
              <Chip
                color="success"
                size="md"
                variant="flat"
                radius="sm"
                className="text-xs"
                startContent={<RiAccountCircleFill size={18} />}>
                {" "}
                0.5 YOE{" "}
              </Chip>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 py-2">
          <h1 className="text-4xl font-bold  text-white ">Shuang Yin Ng</h1>
          <div className="flex items-center justify-center gap-1 mt-2">
            {socialUrls.map((socialUrl) => (
              <Contacts
                key={socialUrl.name}
                name={socialUrl.name}
                url={socialUrl.url}
              />
            ))}
          </div>
        </div>
      </div>

      <Divider />
      <div className="w-full px-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl font-bold">Experiences</h1>

        <Card fullWidth={true} className="text-xs p-2">
          <CardHeader className=" justify-between items-start">
            <div className="flex flex-col">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Software Engineer{" "}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                Slack{" "}
              </h5>
            </div>
            <p>03/2022 - Present</p>
          </CardHeader>

          <CardBody className="pt-0">
            {/* Achievements */}
            <p>• Developed a new feature for the Quickcard app.</p>
            <p>• Implemented a new design for the Quickcard app.</p>
            <p>• Fixed a bug in the Quickcard app.</p>
          </CardBody>
          <CardFooter className="text-small justify-between pt-0">
            <div className="flex flex-row gap-2">
              <Chip size="sm" color="success" variant="flat">
                Python
              </Chip>
              <Chip size="sm" color="danger" variant="flat">
                Javascript
              </Chip>
              <Chip size="sm" color="secondary" variant="flat">
                OpenCV
              </Chip>
            </div>
            <FiArrowDownRight />
          </CardFooter>
        </Card>
        <Divider className="bg-default-600 my-2" />
      </div>
      <div className="w-full px-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui">
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="w-full col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Your day your way
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/images/logo.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/logo.png"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/images/card-example-6.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Divider className="bg-default-600 my-2" />
      </div>

      <div className="w-full px-4 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl font-bold">References</h1>
        <Card className="max-w-[400px]">
          <CardHeader className=" gap-3">
            <User
              name="Junior Garcia"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal>
                  @jrgarciadev
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
          </CardHeader>
          <CardBody className="pt-0">
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
        <Card className="max-w-[400px]">
          <CardHeader className=" gap-3">
            <User
              name="Junior Garcia"
              description={
                <Link
                  href="https://twitter.com/jrgarciadev"
                  size="sm"
                  isExternal>
                  @jrgarciadev
                </Link>
              }
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
          </CardHeader>
          <CardBody className="pt-0">
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
        <Button
          color="default"
          variant="flat"
          className="flex-1 p-2 rounded-lg px-5 w-full"
          startContent={
            <Image
              radius="sm"
              alt="NextUI hero Image with delay"
              src="/images/logo.png"
            />
          }
          onPress={() => router.push("/")}>
          Claim your Quickcard now!
        </Button>
        <Spacer y={14} />
      </div>

      <Button
        color="primary"
        className="flex-1 fixed bottom-4 p-6 rounded-full w-[92%] z-50 opacity-100"
        onClick={handleAddToContact}
        variant="solid">
        + Add to contact
      </Button>
    </div>
  );
}
