"use client";

import Topbar from "@/app/(main)/_components/navbar/Topbar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth-client";
import { handleSmoothScroll } from "@/lib/smoothScroll";
import { useProgress } from "@bprogress/next";
import { Menu, Phone, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Session = typeof auth.$Infer.Session;

const Navbar = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { start, stop } = useProgress();
  const router = useRouter();

  const user = session?.user;
  // Navigation Links
  const menuList = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "Services",
      url: "#services",
    },

    {
      title: "About Driver",
      url: "#services",
    },
    {
      title: "Pricing",
      url: "#pricing",
    },
    {
      title: "FAQ",
      url: "#faq",
    },
  ];
  const handleSignout = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          start();
        },
        onSuccess: () => {
          router.refresh();
          stop();
          toast.success("Logged out successfully");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          stop();
        },
      },
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Check if we're on the home page and it's a hash link
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      handleSmoothScroll(href);
      closeMobileMenu(); // Close mobile menu if open
    }
  };

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change navbar style after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 z-20 w-full transition-all duration-300 ${pathname === "/" ? "fixed bg-transparent" : "sticky bg-black/80 backdrop-blur-sm"}`}
    >
      <Topbar />
      <div
        className={` ${isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="container py-2 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center rounded">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="w-14"
                />
              </div>
              {/* <div className="rounded-xl bg-[#dc143c] p-3 text-4xl text-white shadow-md">
                eL
              </div> */}
              <span className="text-4xl font-semibold text-white">
                Escalade4lax
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 lg:flex">
              {menuList.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.url!}
                  className="text-lg font-semibold text-nowrap text-white transition-colors hover:text-primary"
                  onClick={(e) => handleNavClick(e, menu.url!)}
                >
                  {menu.title}
                </Link>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-0 font-normal text-white hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary">
                      <UserRound className="h-5 w-5" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 p-2">
                        {user ? (
                          <>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/profile"
                                  className={`block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-primary focus:bg-accent ${
                                    pathname === "/profile"
                                      ? "bg-accent font-semibold text-primary"
                                      : ""
                                  }`}
                                >
                                  <div className="text-sm font-medium">
                                    Profile
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            {user.role === "admin" && (
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/dashboard"
                                    className={`block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-primary focus:bg-accent ${
                                      pathname.startsWith("/dashboard")
                                        ? "bg-accent font-semibold text-primary"
                                        : ""
                                    }`}
                                  >
                                    <div className="text-sm font-medium">
                                      Dashboard
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )}
                            <li>
                              <button
                                onClick={handleSignout}
                                className="w-full rounded-md p-3 text-left text-sm leading-none font-medium transition-colors outline-none select-none hover:bg-accent hover:text-primary focus:bg-accent"
                              >
                                Logout
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/auth/sign-in"
                                  className="block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-primary focus:bg-accent"
                                >
                                  <div className="text-sm font-medium">
                                    Sign In
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/auth/sign-up"
                                  className="block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-primary focus:bg-accent"
                                >
                                  <div className="text-sm font-medium">
                                    Sign Up
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </>
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/* Phone Button */}
              <div className="flex items-center gap-4 xl:ml-28">
                <Link href="tel:+1-310-756-5533" className="hidden lg:block">
                  <button className="flex cursor-pointer items-center space-x-2 rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90">
                    <Phone className="h-4 w-4" />
                    <span className="inline font-semibold text-nowrap">
                      +1-310-756-5533
                    </span>
                  </button>
                </Link>
                {/* Mobile Menu Button */}
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent>
          <DrawerHeader className="h-24 border-b-0 bg-black px-2 py-4">
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-3"
                onClick={closeMobileMenu}
              >
                {/* <div className="flex items-center justify-center rounded">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-16"
                  />
                </div> */}
                <div className="rounded-xl bg-[#dc143c] p-3 text-3xl text-white shadow-md">
                  eL
                </div>
                <span className="text-2xl font-semibold text-white">
                  Escalade4lax
                </span>
              </Link>
              <DrawerClose className="p-2 text-white">
                <X className="h-7 w-7" />
              </DrawerClose>
            </div>
            <DrawerDescription className="sr-only">
              Mobile sidebar navigation
            </DrawerDescription>
          </DrawerHeader>
          <hr />
          <div className="flex h-full flex-col overflow-y-auto bg-black px-6 text-white">
            {/* Mobile Navigation Menu */}
            <nav className="space-y-4 pt-4">
              {menuList.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.url!}
                  className="block py-3 text-lg font-medium transition-colors hover:text-primary"
                  onClick={(e) => handleNavClick(e, menu.url!)}
                >
                  {menu.title}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth Menu */}
            <div className="mt-8 space-y-2 border-t border-gray-800 pt-6">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    className="block rounded-md py-3 text-lg font-medium transition-colors hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      href="/dashboard"
                      className="block rounded-md py-3 text-lg font-medium transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleSignout();
                      closeMobileMenu();
                    }}
                    className="w-full rounded-md py-3 text-left text-lg font-medium transition-colors hover:text-primary"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/sign-in"
                    className="block rounded-md py-3 text-lg font-medium transition-colors hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="block rounded-md py-3 text-lg font-medium transition-colors hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
