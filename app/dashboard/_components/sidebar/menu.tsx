import { signOut } from "@/lib/auth-client";
import { useProgress } from "@bprogress/next";
import {
  BookAlertIcon,
  Calendar,
  FileText,
  Home,
  LayoutGrid,
  LogOut,
  PenTool,
  Settings,
  UsersRound,
  Workflow,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import MenuItem from "./menu-item";

const SidebarMenu = () => {
  const router = useRouter();
  const { start, stop } = useProgress();

  const handleSignout = async () => {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          start();
        },
        onSuccess: () => {
          router.push("/auth/sign-in");
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

  const menuList = [
    {
      title: "Back to Home",
      icon: <Home className="icon" />,
      url: "/",
    },
    {
      title: "Dashboard",
      icon: <LayoutGrid className="icon" />,
      url: "/dashboard",
    },
    {
      title: "Users",
      icon: <UsersRound className="icon" />,
      url: "/dashboard/users",
    },
    {
      title: "Bookings",
      icon: <BookAlertIcon className="icon" />,
      url: "/dashboard/bookings",
    },

    {
      title: "Calendar",
      icon: <Calendar className="icon" />,
      url: "/dashboard/calendar",
    },
    {
      title: "Fuel Reports",
      icon: <FileText className="icon" />,
      url: "/dashboard/fuel-reports",
    },
    {
      title: "Maintenance",
      icon: <Workflow className="icon" />,
      url: "/dashboard/maintenance",
    },
    {
      title: "Blogs",
      icon: <PenTool className="icon" />,
      url: "/dashboard/blogs",
    },
    {
      title: "Settings",
      icon: <Settings className="icon" />,
      url: "/dashboard/settings",
    },
  ];

  return (
    <nav className="grow space-y-1.5 overflow-y-auto p-6">
      {menuList.map((menu, index) => {
        return <MenuItem key={index} {...menu} />;
      })}
      <hr className="mt-10" />
      <button
        onClick={handleSignout}
        className="mt-4 flex cursor-pointer items-center gap-2"
      >
        <LogOut aria-hidden="true" />
        <span>Logout</span>
      </button>
    </nav>
  );
};

export default SidebarMenu;
