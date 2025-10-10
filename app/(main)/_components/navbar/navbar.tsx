"use client";

import Topbar from "@/app/(main)/_components/navbar/Topbar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
} from "@/components/ui/drawer";
import type { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth-client";
import { handleSmoothScroll } from "@/lib/smoothScroll";
import { useProgress } from "@bprogress/next";
import { Menu, Phone, X } from "lucide-react";
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
  const handleSignoutMobile = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          start();
        },
        onSuccess: () => {
          router.refresh();
          stop();
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
    <nav className="fixed top-0 z-20 w-full bg-transparent transition-all duration-300">
      <Topbar />
      <div
        className={` ${isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="container py-2 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              {/* <div className="flex items-center justify-center rounded">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="w-14"
                />
              </div> */}
              <div className="rounded-xl bg-[#dc143c] p-3 text-4xl text-white shadow-md">
                eL
              </div>
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
              {/* Phone Button */}
              <div className="flex items-center gap-4 xl:ml-28">
                <Link href="tel:+1-310-756-8533" className="hidden lg:block">
                  <button className="flex cursor-pointer items-center space-x-2 rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90">
                    <Phone className="h-4 w-4" />
                    <span className="inline font-semibold text-nowrap">
                      +1-310-756-8533
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

            {/* Mobile Phone Button */}
            {/* <div className="mt-8 border-t border-gray-800 pt-6 hi">
              <Link href="tel:+1-310-756-8533">
                <button className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary/90">
                  <Phone className="h-5 w-5" />
                  <span>+1-310-756-8533</span>
                </button>
              </Link>
            </div> */}
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
