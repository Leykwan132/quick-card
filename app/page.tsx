"use client";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button, ButtonGroup } from "@nextui-org/react";
import { BusinessCard } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  organizationName: string;
  description: string;
  logoText: string;
  barcodeLink: string;
  employeeStartYear: string;
  employeeName: string;
  employeeTitle: string;
};

// Validation
const validateUrl = (value) => {
  const urlRegex = /^(http|https):\/\/[\w.-]+\.[\w]{2,}(\/[\w .\/?#]*?)?$/;
  if (!urlRegex.test(value)) {
    return "Please enter a valid URL (e.g., https://www.example.com).";
  }
  return undefined; // No error message if valid
};

const validateStartYear = (value) => {
  // Check if it's a 4-digit number
  if (!/^\d{4}$/.test(value)) {
    return "Start year must be a 4-digit number.";
  }
  return undefined; // No error message if valid
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleCreateAppleWallet = async () => {
    // const response = await fetch("http://localhost:3000/api");
    // fetch the post request to the api
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serialNumber: "123456",
      }),
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error fetching pass: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "test.pkpass"; // Set the desired filename
      link.click();

      setTimeout(() => window.URL.revokeObjectURL(url), 10000); // Revoke URL after 10 seconds

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className=" py-3">
      <div className="flex flex-row justify-between items-center px-5">
        <UserButton showName="true" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="organizationName">organizationName</label>
          <input
            className="p-2 rounded-md"
            {...register("organizationName", { required: true })}
          />
          {errors.organizationName && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="description">description</label>
          <input
            className="p-2 rounded-md"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="logoText">logoText</label>
          <input
            className="p-2 rounded-md"
            {...register("logoText", { required: true })}
          />
          {errors.logoText && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="barcodeLink">barcodeLink</label>
          <input
            className="p-2 rounded-md"
            {...register("barcodeLink", {
              required: true,
              validate: validateUrl,
            })}
          />
          {errors.barcodeLink && (
            <span className="text-xs text-red-500">
              {errors.barcodeLink?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="employeeStartYear">employeeStartYear</label>
          <input
            className="p-2 rounded-md"
            {...register("employeeStartYear", {
              required: true,
              validate: validateStartYear,
            })}
          />
          {errors.employeeStartYear && (
            <span className="text-xs text-red-500">
              {errors.employeeStartYear?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="employeeName">employeeName</label>
          <input
            className="p-2 rounded-md"
            {...register("employeeName", { required: true })}
          />
          {errors.employeeName && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="employeeTitle">employeeTitle</label>
          <input
            className="p-2 rounded-md"
            {...register("employeeTitle", { required: true })}
          />
          {errors.employeeTitle && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>

        <input
          type="submit"
          className="cursor-pointer bg-teal-500 rounded-lg p-2 text-white"
        />
      </form>
      <Button color="primary" onClick={handleCreateAppleWallet}>
        Add to Apple Wallet
      </Button>
      <Button color="primary">Add to Google Wallet</Button>
    </div>
  );
}
