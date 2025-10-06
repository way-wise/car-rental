"use client";

import { signOut } from "@/lib/auth-client";
import { handleSmoothScroll } from "@/lib/smoothScroll";
import { useProgress } from "@bprogress/next";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
} from "@/components/ui/drawer";
import type { auth } from "@/lib/auth";
type Session = typeof auth.$Infer.Session;

const Navbar = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: "Pricing",
      url: "#pricing",
    },
    {
      title: "About Driver",
      url: "#about-driver",
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

  return (
    <>
      <nav className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
                <span className="text-lg font-bold text-white">CR</span>
              </div>
              <span className="text-xl font-semibold text-white">
                CarRide California
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {menuList.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.url!}
                  className="text-white transition-colors hover:text-primary"
                  onClick={(e) => handleNavClick(e, menu.url!)}
                >
                  {menu.title}
                </Link>
              ))}
            </div>

            {/* Phone Button */}
            <div className="flex items-center gap-4">
              <Link href="tel:+1-310-756-8533">
                <button className="flex cursor-pointer items-center space-x-2 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">+1-310-756-8533</span>
                </button>
              </Link>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-white md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent>
          <DrawerHeader className="border-b-0 bg-black">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center space-x-3"
                onClick={closeMobileMenu}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
                  <span className="text-lg font-bold text-white">CR</span>
                </div>
                <span className="text-xl font-semibold text-white">
                  CarRide California
                </span>
              </Link>
              <DrawerClose className="p-2 text-white">
                <X className="h-6 w-6" />
              </DrawerClose>
            </div>
            <DrawerDescription className="sr-only">
              Mobile sidebar navigation
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col overflow-y-auto bg-black p-6 text-white">
            {/* Mobile Navigation Menu */}
            <nav className="space-y-4">
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
            <div className="mt-8 border-t border-gray-800 pt-6">
              <Link href="tel:+1-310-756-8533">
                <button className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-primary px-4 py-3 text-white transition-colors hover:bg-primary/90">
                  <Phone className="h-5 w-5" />
                  <span>+1-310-756-8533</span>
                </button>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
