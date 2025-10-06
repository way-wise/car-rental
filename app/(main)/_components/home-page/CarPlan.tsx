import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { IoCall } from "react-icons/io5";

const CarPlan = () => {
  const carImages = [
    "/assets/images/inside.png",
    "/assets/images/Black1.png",
    "/assets/images/image11.png",
  ];
  const pricingPlans = [
    {
      title: "Airport to\nHome",
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
      title: "Home to\nAirport",
      description:
        "One-way transfer from any major California airport to your home",
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
      title: "City Rides",
      description:
        "One-way transfer from any major California airport to your home",
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
    <section className="relative w-full overflow-hidden bg-[url(/assets/images/plan-bg.png)] bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-5 bg-white/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-2 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-32">
          {/* Car Images Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
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
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-2 text-xl leading-[30px] font-normal tracking-[-1.00px] text-black md:px-4">
                No hidden fees, no surge pricing. Just honest, upfront rates for
                professional transportation services across California.
              </p>
            </div>
            <div className="space-y-12">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`group "hover:border-2 relative rounded-[10px] border border-[#f1f1f1] bg-white shadow-[0px_1px_3px_#0000001a] transition-all duration-300 ease-in-out hover:border-[#dc143c] hover:shadow-[0px_4px_10px_#dc143c99]`}
                >
                  <CardContent className="flex h-full p-0">
                    <div className="flex flex-1 flex-col items-center justify-center p-4">
                      <h3
                        className={`mb-2 text-center text-xl leading-8 font-semibold tracking-[-0.50px] whitespace-pre-line text-black transition-all duration-300 ease-in-out group-hover:text-[#dc143c]`}
                      >
                        {plan.title}
                      </h3>
                      <p className="text-center text-sm leading-[22px] font-normal tracking-[0] text-[#303740]">
                        {plan.description}
                      </p>
                    </div>
                    <div className="h-32 w-px self-center bg-[#ececec]" />
                    <div className="flex flex-1 flex-col justify-center p-4">
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
                    <div className="relative flex w-[180px] flex-col items-center justify-center rounded-[0px_10px_10px_0px] bg-[#f1f1f1] transition-all duration-300 ease-in-out group-hover:bg-primary">
                      {plan.isPopular && (
                        <Badge className="absolute top-3 h-[25px] w-[110px] rounded-[40px] border-1 bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-all duration-300 ease-in-out group-hover:border-white group-hover:bg-[#dc143c]">
                          <span className="text-xs leading-[15.6px] font-semibold tracking-[0] text-white">
                            Most Popular
                          </span>
                        </Badge>
                      )}

                      <div className="mb-4 text-center text-3xl leading-[normal] font-semibold tracking-[-0.50px] text-[#dc143c] group-hover:text-white">
                        {plan.price}
                        {plan.priceUnit && (
                          <span className="text-lg font-medium tracking-[-0.10px] text-black">
                            {plan.priceUnit}
                          </span>
                        )}
                      </div>
                      <Button className="h-[40px] w-[150px] rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-all duration-300 ease-in-out hover:bg-white hover:text-[#dc143c]">
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
              <Button className="mx-auto mt-4 w-3/4 rounded-full bg-[#dc143c] py-6 shadow-[inset_0px_-1px_0px_#00000040] transition-all duration-300 ease-in-out hover:bg-[#c01234]">
                <IoCall className="h-12 w-12" />

                <span className="text-lg leading-[28.6px] font-bold tracking-[0] text-white">
                  +1-310-756-5533
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarPlan;
