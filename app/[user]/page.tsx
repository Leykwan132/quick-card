"use client";
import { useState } from "react";
import { Button, ButtonGroup, Chip, Image, Text } from "@nextui-org/react";
import { BsBuildingsFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiArrowDownRight } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Spacer,
  Link,
  Divider,
  User,
} from "@nextui-org/react";

export default function Page({ params }: { params: { user: string } }) {
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
    <div className="px-4 flex flex-col justify-center items-center py-5 gap-6 ">
      <Image
        radius="full"
        width={150}
        height={150}
        alt="NextUI hero Image with delay"
        src="https://xsgames.co/randomusers/avatar.php?g=pixel"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <Chip
            startContent={<BsBuildingsFill />}
            color="warning"
            variant="flat"
            radius="sm"
            size="sm"
          >
            Quickcard
          </Chip>{" "}
          <Chip
            startContent={<RiAccountCircleFill />}
            color="secondary"
            variant="flat"
            radius="sm"
            size="sm"
          >
            Software Engineer
          </Chip>
        </div>
        <h1 className="text-2xl font-bold">Ley Kwan Choo</h1>
      </div>
      <p className="self-center"> Call me on Tuesday or WhatsApp only.</p>
      <Divider />
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
      <Divider />
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
            href="https://github.com/nextui-org/nextui"
          >
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
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
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
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Divider />
      <h1 className="text-2xl font-bold">References</h1>
      <Card className="max-w-[400px]">
        <CardHeader className=" gap-3">
          <User
            name="Junior Garcia"
            description={
              <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                @jrgarciadev
              </Link>
            }
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
          />
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
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
      <Button
        color="default"
        variant="flat"
        className="flex-1  p-2 rounded-lg px-5 w-full"
        startContent={
          <Image
            radius="xs"
            alt="NextUI hero Image with delay"
            src="/images/logo.png"
          />
        }
      >
        Claim your Quickcard now!
      </Button>
      <Spacer y={10} />
      <Button
        color="primary"
        className="flex-1 fixed bottom-5 p-5 rounded-full w-[90%] z-50 opacity-90"
        onClick={handleAddToContact}
        variant="solid"
      >
        + Add to contact
      </Button>
    </div>
  );
}
