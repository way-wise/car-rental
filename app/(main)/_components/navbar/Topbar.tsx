import { MailIcon, Phone } from "lucide-react";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="bg-black/80 py-1 backdrop-blur-sm lg:hidden">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="tel:+1-310-756-5533" className="text-[12px]">
            <button className="flex cursor-pointer items-center space-x-1 rounded-lg text-white transition-colors hover:bg-primary/90">
              <Phone className="h-4 w-4" />
              <span className="inline">+1-310-756-5533</span>
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <MailIcon className="h-4 w-4 text-white" />
          <Link
            href="mailto:seung@waywise.pro"
            className="text-sm text-white transition-colors hover:text-[#dc143c]"
          >
            seung@waywise.pro
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
