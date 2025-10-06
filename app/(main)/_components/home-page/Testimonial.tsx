"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { CiCalendarDate, CiMobile2 } from "react-icons/ci";
import { LuCar } from "react-icons/lu";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "I have been using this service for over a year now. The consistency and quality are unmatched. John is courteous, knowledgeable about the area, and always makes the ride comfortable.",
      avatar: "/assets/images/fidden1.png",
      stars: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Executive",
      content:
        "Outstanding service! The drivers are professional, punctual, and the vehicles are always clean and comfortable. This has become my go-to transportation service for business meetings.",
      avatar: "/assets/images/image1.png",
      stars: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Event Coordinator",
      content:
        "Reliable and trustworthy service. I've used them for multiple events and they never disappoint. The booking process is simple and the drivers are always on time.",
      avatar: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-10.png",
      stars: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Travel Consultant",
      content:
        "Excellent customer service and competitive pricing. The drivers are knowledgeable about local routes and always ensure a smooth journey. Highly recommended!",
      avatar: "/assets/images/image5.png",
      stars: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      role: "Corporate Manager",
      content:
        "Professional, efficient, and reliable. I've been using this service for corporate events and personal travel. The quality of service is consistently excellent.",
      avatar: "/assets/images/image2.jpg",
      stars: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png",
    },
  ];

  const howItWorksSteps = [
    {
      number: "1",
      title: "Book Online",
      description:
        "Choose your pickup and drop-off locations, select date and time through our simple booking form.",
      icon: <CiMobile2 />,
    },
    {
      number: "2",
      title: "Get Confirmation",
      description:
        "Receive instant confirmation with driver details and estimated arrival time via email or SMS or phone call.",
      icon: <CiCalendarDate />,
    },
    {
      number: "3",
      title: "Enjoy Your Ride",
      description:
        "Relax in comfort as your professional driver takes you safely to your destination on time.",
      icon: <LuCar />,
    },
  ];
  return (
    <section
      id="about-driver"
      className="relative w-full overflow-hidden bg-[url(/assets/images/testimonial.png)] bg-cover bg-center"
    >
      {/* Overlay with low opacity */}
      <div className="absolute inset-0 z-5 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Testimonial Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl leading-tight font-semibold tracking-[-1.00px] text-white lg:text-5xl">
                What Our Clients Say
              </h2>
              <p className="mt-2 text-xl leading-8 font-normal tracking-[-1.00px] text-white">
                Trusted by hundreds of satisfied customers
              </p>
            </div>
            <div className="relative">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="">
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <div className="p-1">
                        <Card className="rounded-[20px] border-0 bg-white">
                          <CardContent className="flex h-full flex-col items-center justify-center p-8">
                            <img
                              className="mb-8 h-[21px] w-[126px]"
                              alt="Stars"
                              src={testimonial.stars}
                            />
                            <p className="mb-12 text-center text-xl leading-8 font-normal tracking-[-0.50px] text-black">
                              &quot;{testimonial.content}&quot;
                            </p>
                            <div className="flex items-center gap-5">
                              <img
                                className="h-16 w-16 rounded-full"
                                alt={testimonial.name}
                                src={testimonial.avatar}
                              />
                              <div>
                                <div className="text-base leading-[normal] font-medium tracking-[-0.50px] text-[#dc143c]">
                                  {testimonial.name}
                                </div>
                                <div className="text-sm leading-[normal] font-normal tracking-[-0.50px] text-[#303740]">
                                  {testimonial.role}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute bottom-0 left-4 border-black text-black hover:border-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="absolute right-4 bottom-0 border-black text-black hover:border-primary hover:bg-primary hover:text-white" />
              </Carousel>
            </div>
          </div>
          {/* How It Works Section */}
          <div className="space-y-12 pl-2">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                How It Works
              </h2>
              <p className="mt-2 text-lg leading-relaxed font-normal tracking-[-0.50px] text-white">
                Three simple steps to your perfect ride
              </p>
            </div>
            <div className="space-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="flex h-24 w-24 items-center justify-center rounded-[45px] bg-primary text-[40px] font-semibold text-white">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-white">
                      <span className="text-center text-sm leading-5 font-bold tracking-[0] text-primary">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl leading-[normal] font-medium tracking-[-0.50px] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-[normal] font-normal tracking-[0] text-white">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
