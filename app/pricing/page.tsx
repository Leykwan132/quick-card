"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";
import { TiTick } from "react-icons/ti";

interface PageProps {
  // Define your props here
}

const Page: React.FC<PageProps> = () => {
  // Add your component logic here

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col items-center gap-10 p-10 text-black dark:text-white dark:bg-slate-900 bg-slate-100 ">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Pricing</h1>
        <p className="tracking-tight text-default-400">
          Quickcard is free for most, but a more advanced version is also
          available.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 sm:flex-row">
        <Card shadow="none" className="max-w-[300px] p-6 ">
          <CardHeader className="flex items-center justify-start gap-3">
            <div className="flex flex-col justify-start gap-1">
              <p className="text-2xl font-bold ">Free</p>
              <p className="text-xs text-default-500">Basic & Free.</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-4 py-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm">For your personal wallet usage</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Native wallet pass support </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Personalized profile page</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Native contact card integration </p>
            </div>
          </CardBody>

          <CardFooter>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-row items-end justify-start gap-2">
                <p className="text-3xl">$0</p>
                <p className="text-xs text-default-500">Free, forever</p>
              </div>{" "}
              <Button
                color="default"
                fullWidth={true}
                radius="full"
                href="https://github.com/nextui-org/nextui">
                Start for free{" "}
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card shadow="none" className="max-w-[300px] p-6">
          <CardHeader className="flex items-center justify-start gap-3">
            <div className="flex flex-col justify-start gap-1">
              <p className="text-2xl font-bold">Pro</p>
              <p className="text-xs text-default-500">
                More functionality and customization.
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-4 py-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Everything in free, plus:</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">More styling options. </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Personalized profile page</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Native contact card integration </p>
            </div>
          </CardBody>

          <CardFooter>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-row items-end justify-start gap-2">
                <p className="text-3xl">$5</p>
                <p className="mb-2 text-xs text-default-500">
                  USD/month, billed monthly
                </p>
              </div>
              <Button
                color="secondary"
                fullWidth={true}
                radius="full"
                href="https://github.com/nextui-org/nextui">
                7-day Free Trial{" "}
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card shadow="none" className="max-w-[300px] p-6">
          <CardHeader className="flex items-center justify-start gap-3">
            <div className="flex flex-col justify-start gap-1">
              <p className="text-2xl font-bold">Enterprise</p>
              <p className="text-xs text-default-500">
                Custom functionality for Enterprises.
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-4 py-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Everything in pro, plus:</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Ground-up design application </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">Application consultation</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <TiTick />
              <p className="text-sm">24-hour feedback </p>
            </div>
          </CardBody>

          <CardFooter>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-row items-end justify-start gap-2">
                <p className="text-3xl">Custom</p>
              </div>
              <Button
                color="default"
                fullWidth={true}
                radius="full"
                href="https://github.com/nextui-org/nextui">
                Contact Us{" "}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
