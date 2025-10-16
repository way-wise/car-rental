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
  const router = useRouter();
  const { start, stop } = useProgress();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const user = session?.user;

  const menuList = [
    { title: "Home", url: "#home" },
    { title: "Services", url: "#services" },
    { title: "About Driver", url: "#about" },
    { title: "Pricing", url: "#pricing" },
    { title: "Blog", url: "/blogs" },
    { title: "FAQ", url: "#faq" },
  ];

  const handleSignout = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => start(),
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

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      if (pathname === "/") {
        handleSmoothScroll(href);
      } else {
        sessionStorage.setItem("scrollTarget", href);
        router.push("/");
      }

      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => handleSmoothScroll(target), 500);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 z-20 w-full transition-all duration-300 ${
        pathname === "/"
          ? "fixed bg-transparent"
          : "sticky bg-black/90 backdrop-blur-sm"
      }`}
    >
      <Topbar />

      <div
        className={`${
          isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container py-2 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-40 lg:w-42 xl:w-52"
                unoptimized
              />
              {/* <span className="hidden text-4xl font-semibold text-white lg:block">
                Escalade4lax
              </span> */}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden items-center space-x-8 lg:flex">
              {menuList.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.url}
                  onClick={(e) => handleNavClick(e, menu.url)}
                  className="text-lg font-semibold text-white transition-colors hover:text-primary"
                >
                  {menu.title}
                </Link>
              ))}

              {/* Profile Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-0 font-normal text-white hover:bg-transparent hover:text-primary data-[state=open]:text-primary">
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
                                  className={`block rounded-md p-3 text-sm leading-none font-medium hover:bg-accent hover:text-primary ${
                                    pathname === "/profile"
                                      ? "bg-accent font-semibold text-primary"
                                      : ""
                                  }`}
                                >
                                  Profile
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            {user.role === "admin" && (
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/dashboard"
                                    className={`block rounded-md p-3 text-sm leading-none font-medium hover:bg-accent hover:text-primary ${
                                      pathname.startsWith("/dashboard")
                                        ? "bg-accent font-semibold text-primary"
                                        : ""
                                    }`}
                                  >
                                    Dashboard
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )}
                            <li>
                              <button
                                onClick={handleSignout}
                                className="w-full rounded-md p-3 text-left text-sm font-medium hover:bg-accent hover:text-primary"
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
                                  className="block rounded-md p-3 text-sm font-medium hover:bg-accent hover:text-primary"
                                >
                                  Sign In
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/auth/sign-up"
                                  className="block rounded-md p-3 text-sm font-medium hover:bg-accent hover:text-primary"
                                >
                                  Sign Up
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
              <Link href="tel:+1-310-756-5533">
                <button className="flex items-center space-x-2 rounded-full bg-primary px-6 py-3 text-white hover:bg-primary/90">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">+1-310-756-5533</span>
                </button>
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent>
          <DrawerHeader className="h-24 bg-black px-2 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3"
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="w-32"
                  unoptimized
                />
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
          <div className="flex h-full flex-col bg-black px-6 text-white">
            <nav className="space-y-4 pt-4">
              {menuList.map((menu) => (
                <Link
                  key={menu.title}
                  href={menu.url}
                  onClick={(e) => handleNavClick(e, menu.url)}
                  className="block py-3 text-lg font-medium hover:text-primary"
                >
                  {menu.title}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-2 border-t border-gray-800 pt-6">
              {user ? (
                <>
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium hover:text-primary"
                  >
                    Profile
                  </Link>
                  {user.role === "admin" && (
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-lg font-medium hover:text-primary"
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleSignout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-3 text-left text-lg font-medium hover:text-primary"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/sign-in"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium hover:text-primary"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-lg font-medium hover:text-primary"
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
