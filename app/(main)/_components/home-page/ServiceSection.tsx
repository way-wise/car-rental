import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Car, Plane } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";

import Image from "next/image";
const serviceCards = [
  {
    title: "Airport Pick & Drop",
    description:
      "Reliable pickup and drop-off services to all California airports. Never miss a flight again.",
    icon: <Plane />,
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-[#303740]",
  },
  {
    title: "Corporate Rides",
    description:
      "Professional transportation for your daily office commute. Comfortable and punctual service.",
    icon: <Building2 />,
    bgColor: "bg-[#db143c]",
    textColor: "text-white",
    descColor: "text-white",
  },
  {
    title: "City Pick & Drop",
    description:
      "Explore California cities with our hourly rental service. Perfect for meetings and sightseeing.",
    icon: <Car />,
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-[#303740]",
  },
];
const driverBadges = [
  {
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-14.svg",
    title: "30 Years",
    subtitle: "Experience",
  },
  {
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-7.svg",
    title: "Licensed",
    subtitle: "Professional",
  },
  {
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-1.svg",
    title: "Insured &",
    subtitle: "Background Checked",
  },
];

const ServiceSection = () => {
  return (
    <section
      id="services"
      className={`relative bg-[url(/assets/images/service-bg.png)] bg-cover bg-center`}
    >
      {/* Overlay with low opacity */}
      <div className="absolute inset-0 z-5 bg-[#EAEEEF]/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto gap-12 px-2 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Services Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Service
              </h2>
              <p className="mt-2 text-lg leading-relaxed font-normal tracking-[-0.50px] text-[#303740] md:px-6">
                We provide premium transportation services across California
                with professional drivers and luxury vehicles for all your
                travel needs.
              </p>
            </div>
            <div className="space-y-8">
              {serviceCards.map((service, index) => (
                <Card
                  key={index}
                  className={`${service.bgColor} group rounded-[10px] border-0 bg-primary transition-all duration-300 ease-in-out hover:bg-white`}
                >
                  <CardContent className="flex h-full flex-col items-center justify-center p-8 group-hover:text-black">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE8EC] font-normal text-primary">
                      {service.icon}
                    </div>
                    <h3
                      className={`mb-2 text-center text-xl leading-[normal] font-semibold tracking-[-0.50px] text-white transition-all duration-300 ease-in-out group-hover:text-black`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-center text-base leading-[normal] font-normal tracking-[0] text-white transition-all duration-300 ease-in-out group-hover:text-black`}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Driver Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Meet Seung Lee
              </h2>
              <p className="mt-2 text-lg leading-8 font-normal tracking-[-0.50px] text-[#303740]">
                Your Professional Driver (Company owner)
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {driverBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Image
                      className="h-5 w-5"
                      alt={badge.title}
                      src={badge.icon}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <div className="text-base leading-6 font-semibold tracking-[0] text-black">
                      {badge.title}
                    </div>
                    <div className="text-sm leading-5 font-normal tracking-[0] text-[#303740]">
                      {badge.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-base leading-[25px] font-normal tracking-[0] text-[#303740]">
              I personally drive my own car to ensure every ride is safe,
              comfortable, and always on time. With 30 years of professional
              driving experience—20 in the U.S. and 10 in Canada—I proudly
              maintain a spotless record with zero accidents. I know every road
              in California like the back of my hand, and my car is always clean
              and ready. For me, your safety, time, and trust come
              first—that&apos;s my promise to you.
            </p>

            <div className="relative">
              <Image
                className="h-[400px] w-full rounded-[20px] object-cover"
                alt="Driver"
                src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/rectangle-13.png"
                width={400}
                height={400}
              />
              <div className="absolute right-0 bottom-16 flex h-[60px] w-60 items-center justify-center gap-1 rounded-lg bg-white shadow-[0px_0px_6px_#00000033]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <TiStarFullOutline
                    className="h-6 w-6 text-[#FF6600]"
                    key={index}
                  />
                ))}
                <span className="text-base leading-8 font-medium tracking-[-1.00px] whitespace-nowrap text-black">
                  5.0 rating
                </span>
              </div>
            </div>

            <Button className="mx-auto flex h-[60px] w-[260px] rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
              <span className="text-base leading-[20.8px] font-semibold tracking-[0] text-white">
                Book Your Ride
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
