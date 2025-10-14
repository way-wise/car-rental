import {
  Calendar,
  FileText,
  Home,
  LayoutGrid,
  Settings,
  UsersRound,
  Workflow,
} from "lucide-react";
import MenuItem from "./menu-item";

const SidebarMenu = () => {
  const menuList = [
    {
      title: "Dashboard",
      icon: <LayoutGrid className="icon" />,
      url: "/dashboard",
    },
    {
      title: "Back to Home",
      icon: <Home className="icon" />,
      url: "/",
    },
    {
      title: "Users",
      icon: <UsersRound className="icon" />,
      url: "/dashboard/users",
    },
    {
      title: "Bookings",
      icon: <Calendar className="icon" />,
      url: "/dashboard/bookings",
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
    </nav>
  );
};

export default SidebarMenu;
