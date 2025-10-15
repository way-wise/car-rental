import { MailIcon, MapPinnedIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    quickLinks: ["Home", "Services", "Pricing", "About Driver"],
    services: ["Airport Pick & Drop", "Corporate Rides", "City Pick & Drop"],
  };
  return (
    <footer className="w-full bg-black py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center justify-center rounded py-2 md:py-0">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-40 lg:w-42 xl:w-52"
                    unoptimized
                  />
                </div>

                {/* <span className="text-2xl font-semibold text-white">
                  Escalade4lax
                </span> */}
              </Link>
            </div>
            <p className="text-sm leading-5 font-normal tracking-[0] text-white">
              Premium car service providing reliable airport and city rides
              across Los Angeles and surrounding cities with professional
              drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:col-span-8 lg:pl-20">
            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-xl leading-[normal] font-medium tracking-[-0.50px] text-white">
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={`#${link}`}
                    className="text-sm leading-[30px] font-normal tracking-[-0.50px] text-white transition-colors hover:text-[#dc143c]"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-xl leading-[normal] font-medium tracking-[-0.50px] text-white">
                Services
              </h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.services.map((service, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-sm leading-[30px] font-normal tracking-[-0.50px] text-white transition-colors hover:text-[#dc143c]"
                  >
                    {service}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="mb-6 text-xl leading-[normal] font-medium tracking-[-0.50px] text-white">
                Contact Us
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2">
                  <PhoneIcon className="mt-1 h-4 w-4 text-white" />
                  <Link
                    href="tel:+1-310-756-5533"
                    className="text-sm leading-[30px] font-normal tracking-[-0.07px] text-white transition-colors hover:text-[#dc143c]"
                  >
                    +1-310-756-5533
                  </Link>
                </div>
                <div className="flex items-start gap-2">
                  <MailIcon className="mt-1 h-4 w-4 text-white" />
                  <Link
                    href="mailto:seung@waywise.pro"
                    className="text-sm leading-[30px] font-normal tracking-[-0.07px] text-white transition-colors hover:text-[#dc143c]"
                  >
                    seung@waywise.pro
                  </Link>
                </div>
                <div className="flex items-start gap-2">
                  <MapPinnedIcon className="mt-1 h-4 w-4 text-white" />
                  <Link
                    href="https://maps.app.goo.gl/ZzjMftLv3kumh1DZ7"
                    className="text-sm leading-[14px] font-normal tracking-[-0.07px] text-white transition-colors hover:text-[#dc143c]"
                  >
                    <span> Saddleback Ridge Rd, Santa Clarita,</span>
                    <br />
                    <br />
                    <span className=""> CA 91351</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-[#1e1e1e] pt-8">
          <p className="text-center text-sm leading-[30px] font-normal tracking-[-0.50px] text-[#7f7f7f]">
            © 2025 escalade4lax.com. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
