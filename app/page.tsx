"use client";

import { Button, Image, Input } from "@nextui-org/react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [value, setValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("home");
  const menuItems = ["Home", "Solutions", "Pricing", "Log Out"];
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
    <div className="text-black bg-default-100 dark:bg-zinc-900 dark:text-white">
      <div className="h-screen px-6 ">
        <div className="flex flex-col sm:flex-row sm:justify-evenly justify-center items-center max-w-[1000px] mx-auto h-full gap-10">
          {/* left */}
          <div className="flex flex-col gap-6 sm:flex-1">
            <div className="flex flex-col gap-2 text-black dark:text-white">
              <p className="text-2xl font-bold sm:text-3xl ">
                Your phone is the new wallet.
              </p>
              <p className="text-2xl font-bold sm:text-3xl">
                Introducing Quickcard.{" "}
              </p>
              <p className="text-md font-extralight">
                Get ready for a future where your phone becomes the ultimate
                convenience and connection tool.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              {" "}
              <Input
                type="url"
                size="lg"
                value={value}
                onValueChange={setValue}
                isInvalid={false}
                errorMessage={""}
                description={""}
                startContent={
                  <div className="flex items-center pointer-events-none">
                    <span className="text-default-400 text-small">
                      quickcard/{" "}
                    </span>
                  </div>
                }
              />
              <Button color="primary" size="lg">
                Claim
              </Button>
            </div>
          </div>
          <div className="sm:flex-1">
            <Image
              radius="sm"
              alt="NextUI hero Image with delay"
              src="/images/ip15.png"
            />
          </div>

          {/* right */}
        </div>
      </div>
      <div className="h-screen px-6 text-white dark:text-black bg-zinc-900 dark:bg-slate-100">
        <div className="flex flex-col sm:flex-row sm:justify-evenly justify-center items-center max-w-[1000px] mx-auto h-full sm:gap-10 gap-10">
          {/* left */}
          <div className="sm:flex-1">
            <Image
              radius="sm"
              alt="NextUI hero Image with delay"
              src="/images/wallet.png"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-1">
            <div className="flex flex-col gap-2 text-center sm:text-right">
              <p className="text-2xl font-bold sm:text-3xl ">Fast.</p>
              <p className="text-md font-extralight">
                Instant access with built-in wallet.{" "}
              </p>
            </div>
          </div>

          {/* right */}
        </div>
      </div>
      <div className="h-screen px-6 ">
        <div className="flex flex-col sm:flex-row sm:justify-evenly justify-center items-center max-w-[1000px] mx-auto h-full gap-10">
          {/* left */}
          <div className="flex flex-col gap-6 sm:flex-1">
            <div className="flex flex-col gap-2 text-center text-black dark:text-white sm:text-left">
              <p className="text-2xl font-bold sm:text-3xl ">Complete.</p>
              <p className="text-md font-extralight">
                Seamless integration with profile.
              </p>
            </div>
          </div>
          <div className="sm:flex-1">
            <Image
              radius="sm"
              alt="NextUI hero Image with delay"
              src="/images/profile.png"
            />
          </div>

          {/* right */}
        </div>
      </div>

      <div className="h-screen px-6 text-white dark:text-black bg-zinc-900 dark:bg-slate-100">
        <div className="flex flex-col sm:flex-row sm:justify-evenly justify-center items-center max-w-[1000px] mx-auto h-full gap-10">
          {/* left */}
          <div className="sm:flex-1">
            <Image
              radius="sm"
              alt="NextUI hero Image with delay"
              src="/images/contact.png"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-1">
            <div className="flex flex-col gap-2 text-center sm:text-right ">
              <p className="text-2xl font-bold sm:text-3xl ">Simple. </p>
              <p className="text-md font-extralight">
                Share your contact information with ease.
              </p>
            </div>
          </div>

          {/* right */}
        </div>
      </div>

      <Button color="primary" onClick={handleCreateAppleWallet}>
        Add to Apple Wallet
      </Button>
      <Button color="primary">Add to Google Wallet</Button>
    </div>
  );
}

//  TODO: redesign the form
//  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
//       {/* register your input into the hook by invoking the "register" function */}
//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="organizationName">organizationName</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("organizationName", { required: true })}
//         />
//         {errors.organizationName && (
//           <span className="text-xs text-red-500">This field is required</span>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="description">description</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("description", { required: true })}
//         />
//         {errors.description && (
//           <span className="text-xs text-red-500">This field is required</span>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="logoText">logoText</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("logoText", { required: true })}
//         />
//         {errors.logoText && (
//           <span className="text-xs text-red-500">This field is required</span>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="barcodeLink">barcodeLink</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("barcodeLink", {
//             required: true,
//             validate: validateUrl,
//           })}
//         />
//         {errors.barcodeLink && (
//           <span className="text-xs text-red-500">
//             {errors.barcodeLink?.message}
//           </span>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="employeeStartYear">employeeStartYear</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("employeeStartYear", {
//             required: true,
//             validate: validateStartYear,
//           })}
//         />
//         {errors.employeeStartYear && (
//           <span className="text-xs text-red-500">
//             {errors.employeeStartYear?.message}
//           </span>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="employeeName">employeeName</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("employeeName", { required: true })}
//         />
//         {errors.employeeName && (
//           <span className="text-xs text-red-500">This field is required</span>
//         )}
//       </div>

//       <div className="flex flex-col gap-2 ">
//         <label htmlFor="employeeTitle">employeeTitle</label>
//         <input
//           className="p-2 rounded-md"
//           {...register("employeeTitle", { required: true })}
//         />
//         {errors.employeeTitle && (
//           <span className="text-xs text-red-500">This field is required</span>
//         )}
//       </div>

//       <input
//         type="submit"
//         className="p-2 text-white bg-teal-500 rounded-lg cursor-pointer"
//       />
//     </form>
