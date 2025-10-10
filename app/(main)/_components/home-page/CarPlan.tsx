"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CallModal } from "@/components/ui/call-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CarPlan = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const carImages = [
    "/assets/images/inside.png",
    "/assets/images/Black1.png",
    "/assets/images/image11.png",
  ];
  const pricingPlans = [
    {
      title: (
        <>
          <span className="block lg:hidden">Airport to Home</span>
          <span className="hidden lg:inline">
            Airport to
            <br /> Home
          </span>
        </>
      ),
      description:
        "One-way transfer from any major California airport to your home",
      price: "$50",
      priceUnit: "",
      features: [
        "Flight tracking included",
        "Meet & greet service",
        "Free 30-minute wait time",
        "Luggage assistance",
        "Professional driver",
      ],
      isPopular: false,
    },
    {
      title: (
        <>
          <span className="block lg:hidden">Home to Airport</span>
          <span className="hidden lg:inline">
            Home to
            <br />
            Airport
          </span>
        </>
      ),
      description:
        "Professional transportation for your daily office commute. Comfortable and punctual service",
      price: "$50",
      priceUnit: "",
      features: [
        "Punctual pickup guarantee",
        "Traffic monitoring",
        "SMS updates",
        "Luggage assistance",
        "Professional driver",
      ],
      isPopular: true,
    },
    {
      title: (
        <>
          <span className="block lg:hidden">City Rides</span>
          <span className="hidden lg:inline">City Rides</span>
        </>
      ),
      description:
        "Explore California cities with our hourly rental service. Perfect for meetings and sightseeing",
      price: "$30",
      priceUnit: "/hour",
      features: [
        "Minimum 2-hour booking",
        "Wait time included",
        "Multiple stops allowed",
        "Flexible scheduling",
        "Professional driver",
      ],
      isPopular: false,
    },
  ];
  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden bg-[url(/assets/images/plan-bg.png)] bg-cover bg-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-5 bg-white/80"></div>

      {/* Content */}
      <div className="relative z-10 container h-full py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8 xl:grid-cols-2 xl:gap-20">
          {/* Car Images Section */}
          <div className="col-span-1 space-y-8 lg:col-span-2 xl:col-span-1 xl:w-4/5">
            <div className="text-center">
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Our Luxury Car
              </h2>
              <p className="mt-2 text-xl leading-8 font-normal tracking-[-0.50px] text-black md:px-4">
                Clean, comfortable, and well-maintained—our luxury car makes
                every ride smooth and stylish.
              </p>
            </div>
            <div className="space-y-8">
              {carImages.map((image, index) => (
                <div
                  key={index}
                  className="h-[250px] w-full overflow-hidden rounded-[20px] bg-[#131417] transition-transform hover:scale-105"
                >
                  <img
                    className="h-full w-full object-cover"
                    alt={`Car ${index + 1}`}
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="col-span-1 space-y-8 lg:col-span-3 xl:col-span-1">
            <div className="text-center">
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-2 text-xl leading-[30px] font-normal tracking-[-1.00px] text-black md:px-4">
                No hidden fees, no surge pricing. Just honest, upfront rates for
                professional transportation services across in Los Angeles and
                Surrounding Cities.
              </p>
            </div>
            <div className="space-y-12">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`group "hover:border-2 relative rounded-[10px] border border-[#f1f1f1] bg-white shadow-[0px_1px_3px_#0000001a] transition-all duration-300 ease-in-out hover:border-[#dc143c] hover:shadow-[0px_4px_10px_#dc143c99]`}
                >
                  <CardContent className="flex h-full flex-col p-0 sm:flex-row">
                    <div className="flex flex-1 flex-col items-center justify-center p-4">
                      <h3
                        className={`mb-2 text-center text-3xl leading-8 font-semibold tracking-[-0.50px] whitespace-pre-line text-black transition-all duration-300 ease-in-out group-hover:text-[#dc143c]`}
                      >
                        {plan.title}
                      </h3>
                      {/* <p className="text-center text-sm leading-[22px] font-normal tracking-[0] text-[#303740]">
                        {plan.description}
                      </p> */}
                    </div>
                    <div className="h-0 w-px self-center bg-[#ececec] lg:h-32" />
                    <div className="flex flex-1 flex-col justify-center px-4 sm:py-4 lg:p-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="mb-2 flex items-center gap-3"
                        >
                          <Check className="h-4 w-4 text-[#354152]" />
                          <span className="text-xs leading-6 font-normal tracking-[0] text-[#354152]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex w-full flex-col items-center justify-center rounded-[0px_10px_10px_0px] bg-[#f1f1f1] py-2 transition-all duration-300 ease-in-out group-hover:bg-primary sm:w-[180px]">
                      {plan.isPopular && (
                        <>
                          <Badge className="mb-2 px-2 py-1 transition-all duration-300 ease-in-out group-hover:border-white group-hover:bg-primary">
                            <span className="text-xs font-semibold text-white">
                              Most Popular
                            </span>
                          </Badge>
                        </>
                      )}

                      <div className="mb-4 text-center text-3xl leading-[normal] font-semibold tracking-[-0.50px] text-[#dc143c] group-hover:text-white">
                        {plan.price}
                        {plan.priceUnit && (
                          <span className="text-lg font-medium tracking-[-0.10px] text-black">
                            {plan.priceUnit}
                          </span>
                        )}
                      </div>
                      <Button
                        onClick={() => setIsCallModalOpen(true)}
                        className="h-[40px] w-[150px] rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#dc143c]"
                      >
                        <span className="text-sm leading-[20.8px] font-semibold tracking-[0] text-[#dc143c]">
                          Book Now
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl leading-[30px] font-medium tracking-[-0.50px] text-black [text-shadow:0px_2px_6px_#0000004c]">
                Need a custom quote for multiple trips or special requirements?
              </p>
              <Link href="tel:+1-310-756-5533" className="w-full sm:w-[300px]">
                <Button className="mx-auto mt-4 w-full rounded-full bg-primary py-7 shadow-[inset_0px_-1px_0px_#00000040] transition-all duration-300 ease-in-out hover:bg-primary">
                  <Phone className="h-12 w-12" />

                  <span className="text-lg leading-[28.6px] font-bold tracking-[0] text-white">
                    +1-310-756-5533
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        phoneNumber="+1-310-756-8533"
        title="Please call to confirm the booking!"
      />
    </section>
  );
};

export default CarPlan;
