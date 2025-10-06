import { MailIcon, MapPinnedIcon, PhoneIcon } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    quickLinks: ["Home", "Services", "Pricing", "About Driver"],
    services: ["Airport Pick & Drop", "Corporate Rides", "City Pick & Drop"],
  };
  return (
    <footer className="absolute top-[7306px] left-0 h-[413px] w-[1920px] bg-black">
      <div className="absolute top-[93px] left-[375px] flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#dc143c]">
          <span className="text-lg leading-7 font-bold tracking-[0] text-white">
            CR
          </span>
        </div>
        <span className="text-xl leading-7 font-semibold tracking-[0] text-white">
          CarRide California
        </span>
      </div>
      <p className="absolute top-[158px] left-[375px] w-[330px] text-sm leading-5 font-normal tracking-[0] text-white">
        Premium car service providing reliable airport and city rides across
        California with professional drivers.
      </p>
      <div className="absolute top-[92px] left-[812px]">
        <h3 className="mb-[42px] text-xl leading-[normal] font-medium tracking-[-0.50px] text-white">
          Quick Links
        </h3>
        <nav className="flex flex-col gap-[12px]">
          {footerLinks.quickLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-sm leading-[30px] font-normal tracking-[-0.50px] text-white transition-colors hover:text-[#dc143c]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute top-[92px] left-[1054px]">
        <h3 className="mb-[42px] text-xl leading-[normal] font-medium tracking-[-0.50px] text-white">
          Services
        </h3>
        <nav className="flex flex-col gap-[12px]">
          {footerLinks.services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="text-sm leading-[30px] font-normal tracking-[-0.50px] text-white transition-colors hover:text-[#dc143c]"
            >
              {service}
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute top-[92px] left-[1292px]">
        <h3 className="mb-[42px] text-xl leading-[normal] font-medium tracking-[-0.50px] text-white">
          Contact Us
        </h3>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-start gap-2">
            <PhoneIcon className="mt-1 h-4 w-4 text-white" />
            <span className="text-sm leading-[30px] font-normal tracking-[-0.07px] text-white">
              +1-310-756-5533
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MailIcon className="mt-1 h-4 w-4 text-white" />
            <span className="text-sm leading-[30px] font-normal tracking-[-0.07px] text-white">
              seungyoon2@gmail.com
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MapPinnedIcon className="mt-1 h-4 w-4 text-white" />
            <span className="text-sm leading-[14px] font-normal tracking-[-0.07px] text-white">
              Encino Town Center, 17200 Ventura
              <br />
              Blvd, CA 91316
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-[342px] left-[255px] h-px w-[1410px] bg-[#1e1e1e]" />
      <p className="absolute top-[363px] left-[708px] text-center text-sm leading-[30px] font-normal tracking-[-0.50px] whitespace-nowrap text-[#7f7f7f]">
        © 2025 CalRide. All rights reserved. | Privacy Policy | Terms of
        Service
      </p>
    </footer>
  );
};

export default Footer;
