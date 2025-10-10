"use client";
import { Button } from "@/components/ui/button";
import { CallModal } from "@/components/ui/call-modal";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
const serviceCards = [
  {
    title: "Airport Pick & Drop",
    description:
      "Reliable pickup and drop-off services to Los Angeles and surrounding cities airports. Never miss a flight again.",
    icon: "/assets/images/Airplane.svg",
    bgColor: "bg-white",
    subTitle: "Catch your flight without the rush",
    textColor: "text-black",
    descColor: "text-[#303740]",
  },
  {
    title: "Corporate Rides",
    description:
      "Professional transportation for your daily office commute. Comfortable and punctual service.",
    icon: "/assets/images/Building.svg",
    bgColor: "bg-[#db143c]",
    subTitle: "Smooth rides for busy professionals",
    textColor: "text-white",
    descColor: "text-white",
  },
  {
    title: "City Pick & Drop",
    description:
      "Explore Los Angeles and surrounding cities with our hourly rental service. Perfect for meetings and sightseeing.",
    icon: "/assets/images/car.svg",
    bgColor: "bg-white",
    subTitle: "Move freely across the city",
    textColor: "text-black",
    descColor: "text-[#303740]",
  },
  {
    title: "Hourly Service",
    description:
      "Enjoy the freedom of booking a luxury ride by the hour — ideal for errands, client visits, or waiting-time flexibility.",
    icon: "/assets/images/watch.svg",
    bgColor: "bg-white",
    subTitle: "Flexible rides on your schedule.",
    textColor: "text-black",
    descColor: "text-[#303740]",
  },
];
const driverBadges = [
  {
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-14.svg",
    title: "20 Years",
    subtitle: "Experience",
  },
  {
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-7.svg",
    title: "Licensed",
    subtitle: "Professional",
  },
  {
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-1.svg",
    // icon: <Shield />,
    title: "Insured &",
    subtitle: "Background Checked",
  },
];

const ServiceSection = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <section
      id="services"
      className={`relative bg-[url(/assets/images/service-bg.png)] bg-cover bg-center`}
    >
      {/* Overlay with low opacity */}
      <div className="absolute inset-0 z-5 bg-[#EAEEEF]/80"></div>

      {/* Content */}
      <div className="relative z-10 container gap-12 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-4 xl:gap-20">
          {/* Services Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Service
              </h2>
              <p className="mt-2 text-lg leading-relaxed font-normal tracking-[-0.50px] text-[#303740] md:px-6">
                We provide premium transportation services across in Los Angeles
                and surrounding cities with professional drivers and luxury
                vehicles for all your travel needs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {serviceCards.map((service, index) => (
                <Card
                  key={index}
                  className={`${service.bgColor} group rounded-[10px] border-0 bg-primary transition-all duration-300 ease-in-out hover:bg-white`}
                >
                  <CardContent className="flex h-full flex-col items-center justify-center p-4 group-hover:text-black xl:p-8">
                    <div className="flex h-22 w-22 items-center justify-center rounded-full bg-[#FFE8EC] font-normal text-primary">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={64}
                        height={64}
                        unoptimized
                        className="h-16 w-16"
                      />
                    </div>
                    <h3
                      className={`mb-2 text-center text-xl leading-[normal] font-semibold tracking-[-0.50px] text-white transition-all duration-300 ease-in-out group-hover:text-black`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mb-2 text-center text-base leading-[normal] font-normal tracking-[0] text-white transition-all duration-300 ease-in-out group-hover:text-black`}
                    >
                      {service.subTitle}
                    </p>
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
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
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
              comfortable, and always on time. With 20 years of professional
              driving in the U.S. and Canada—I proudly maintain a spotless
              record with zero accidents. I know every road in Los Angeles and
              surrounding cities like the back of my hand, and my car is always
              clean and ready. For me, your safety, time, and trust come
              first—that&apos;ss my promise to you.
            </p>

            <div className="relative h-[300px] w-full md:h-[400px]">
              <Image
                className="h-[300px] w-full md:h-[400px]"
                alt="Driver"
                src="/assets/images/driver.png"
                width={400}
                height={400}
                unoptimized
              />
              <div className="absolute right-[5px] bottom-16 flex h-[60px] w-60 items-center justify-center gap-1 rounded-l-lg bg-white shadow-[0px_0px_6px_#00000033] md:right-[9px]">
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

            <Button
              onClick={() => setIsCallModalOpen(true)}
              className="mx-auto flex w-full rounded-[40px] bg-primary py-6 shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234] lg:py-7"
            >
              <span className="text-base leading-[20.8px] font-semibold tracking-[0] text-white">
                Book Your Ride
              </span>
            </Button>
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        phoneNumber="+1-310-756-8533"
        title="Please call to confirm the booking!"
      />
    </section>
  );
};

export default ServiceSection;
