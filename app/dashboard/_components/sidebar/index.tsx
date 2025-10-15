"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import SidebarMenu from "./menu";

const Sidebar = () => {
  const { state, isMobile, openMobile, setOpenMobile } = useSidebar();
  const pathName = usePathname();

  // Hide sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathName, isMobile, setOpenMobile]);

  if (isMobile) {
    return (
      <Drawer open={openMobile} onOpenChange={setOpenMobile}>
        <DrawerContent>
          <DrawerHeader className="bg-black">
            <div className="flex flex-col">
              <DrawerTitle className="text-xl font-medium">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="flex items-center justify-center rounded py-2 md:py-0">
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={40}
                      height={40}
                      className="w-32"
                      unoptimized
                    />
                  </div>

                  {/* <span className="text-2xl font-semibold text-white">
                  Escalade4lax
                </span> */}
                </Link>
              </DrawerTitle>
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
          <SidebarMenu />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside
      className={cn(
        "hidden w-72 shrink-0 flex-col border-r bg-card transition-[margin] duration-300 md:flex",
        {
          "-ml-72": state === "collapsed",
        },
      )}
    >
      <SidebarMenu />
    </aside>
  );
};

export default Sidebar;
