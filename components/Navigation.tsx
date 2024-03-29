"use client";

import React, { useState } from "react";
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/nextjs";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

interface NavbarProps {
  // Define your props here
}

const Navigation: React.FC<NavbarProps> = () => {
  // Implement your component logic here
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(
    pathname == "/" ? "home" : pathname
  );
  const menuItems = ["Home", "Solutions", "Pricing", "Log Out"];
  return (
    // hide the navbar if current tab is not home/solutions/pricing
    <Navbar
      position="static"
      maxWidth="lg"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`text-black bg-white dark:text-white dark:bg-slate-950 ${
        currentTab == "home" ||
        currentTab == "/solutions" ||
        currentTab == "/pricing"
          ? ""
          : "hidden"
      }`}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-2">
          <Image
            radius="sm"
            alt="NextUI hero Image with delay"
            src="/images/logo.png"
          />
          <Link href="/" className="font-bold text-inherit">
            Quickcard
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={currentTab == "home"}>
          <Link
            color="foreground"
            href="/"
            onClick={() => {
              setCurrentTab("home");
            }}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentTab == "/solutions"}>
          <Link
            href="/solutions"
            color="foreground"
            onClick={() => {
              setCurrentTab("solutions");
            }}>
            Solutions
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentTab == "/pricing"}>
          <Link
            color="foreground"
            href="/pricing"
            onClick={() => {
              setCurrentTab("pricings");
            }}>
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {
            <SignedIn>
              <div className="flex flex-row items-center gap-4">
                <ThemeSwitcher />
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          }
          <SignedOut>
            <div className="flex flex-row items-center gap-4">
              <ThemeSwitcher />

              <SignInButton>
                <Button color="primary" variant="flat">
                  Login{" "}
                </Button>
              </SignInButton>
            </div>
          </SignedOut>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            isActive={currentTab == item.toLowerCase()}
            key={`${item}-${index}`}>
            {item.toLowerCase() == "log out" ? (
              <SignedIn>
                <SignOutButton
                  signOutCallback={() => {
                    setCurrentTab("home");
                    setIsMenuOpen(!isMenuOpen);
                  }}>
                  <p className="text-red-500">Sign out</p>
                </SignOutButton>
              </SignedIn>
            ) : (
              <Link
                onClick={() => {
                  setCurrentTab(item.toLowerCase());
                  setIsMenuOpen(!isMenuOpen);
                }}
                color={index === menuItems.length - 1 ? "danger" : "foreground"}
                className="w-full"
                href={
                  item.toLowerCase() == "home" ? `/` : `/${item.toLowerCase()}`
                }
                size="lg">
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
