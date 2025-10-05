"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useProgress } from "@bprogress/next";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ProfileDropdown } from "./profile-dropdown";

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
      url: "/",
    },
    {
      title: "Services",
      url: "/exercise-setup",
    },
    {
      title: "Pricing",
      url: "/pricing",
    },

    {
      title: "About Driver",
      url: "/about-driver",
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

  return (
    <>
      <nav className="sticky top-0 z-20 h-16 border-b border-border bg-white py-3 dark:bg-card">
        <div className="container flex items-center justify-between gap-2">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.svg"
              alt="Brand Logo"
              width={80}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center justify-between gap-2 xl:flex">
            <div className="flex items-center gap-[2px]">
              {menuList.map((menu, index) => {
                const isActive = pathname === menu.url;

                return (
                  <div key={index} className="flex items-center">
                    {index > 0 && <div className="mx-3 h-4 w-px bg-border" />}
                    <Link
                      href={menu.url!}
                      className={cn(
                        "border-b-2 border-transparent px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none",
                        {
                          "border-b-primary text-primary": isActive,
                          "text-muted-foreground": !isActive,
                        },
                      )}
                    >
                      {menu.title}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              {/* <ThemeSwitcher /> */}
              {session ? (
                <ProfileDropdown session={session} />
              ) : (
                <Button asChild>
                  <Link className="!bg-[#DC143C]" href="/auth/sign-in">
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 xl:hidden">
            {session && <ProfileDropdown session={session} />}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md border border-gray-300 p-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DrawerContent>
          <DrawerHeader className="border-b-0">
            <div className="flex flex-col">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Brand Logo"
                  width={80}
                  height={32}
                  priority
                  className="h-8 w-auto"
                />
              </Link>
              <DrawerDescription className="sr-only">
                Mobile sidebar navigation
              </DrawerDescription>
            </div>
            <DrawerClose
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon" }),
              )}
            >
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col overflow-y-auto p-6">
            {/* Mobile Navigation Menu */}
            <nav className="space-y-4">
              {menuList.map((menu, index) => {
                const isActive = pathname === menu.url;

                return (
                  <Link
                    key={index}
                    href={menu.url!}
                    className={cn(
                      "block border-b-2 border-transparent py-3 text-sm font-medium transition-colors",
                      {
                        "border-b-primary text-primary": isActive,
                        "text-muted-foreground": !isActive,
                      },
                    )}
                    onClick={closeMobileMenu}
                  >
                    {menu.title}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Auth Section */}
            <div className="mt-8 border-t pt-6">
              {session ? (
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Signed in as {session.user.email}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleSignoutMobile}
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button asChild className="w-full">
                  <Link href="/auth/sign-in" onClick={closeMobileMenu}>
                    LOGIN
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
