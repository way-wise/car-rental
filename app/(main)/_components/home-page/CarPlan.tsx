import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";

const CarPlan = () => {
  const carImages = [
    "https://c.animaapp.com/mgdxk0bzO3P1u7/img/rectangle-106.png",
    "https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-8.png",
    "https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-9.png",
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
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-7.png"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Car Images Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="[font-family:'Poppins',Helvetica] text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Our Luxury Car
              </h2>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-xl leading-8 font-normal tracking-[-0.50px] text-[#303740]">
                Clean, comfortable, and well-maintained—our luxury car makes
                every ride smooth and stylish.
              </p>
            </div>
            <div className="space-y-8">
              {carImages.map((image, index) => (
                <div
                  key={index}
                  className="h-[300px] w-full overflow-hidden rounded-[20px] bg-[#131417] transition-transform hover:scale-105"
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
              <h2 className="[font-family:'Poppins',Helvetica] text-4xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-xl leading-[30px] font-normal tracking-[-1.00px] text-white">
                No hidden fees, no surge pricing. Just honest, upfront rates for
                professional transportation services across California.
              </p>
            </div>
            <div className="space-y-4">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`rounded-[10px] bg-white ${
                    plan.isPopular
                      ? "border-2 border-[#dc143c] shadow-[0px_4px_10px_#dc143c99]"
                      : "border border-[#f1f1f1] shadow-[0px_1px_3px_#0000001a]"
                  } relative`}
                >
                  <CardContent className="flex h-full p-0">
                    <div className="flex flex-1 flex-col items-center justify-center p-4">
                      <h3
                        className={`[font-family:'Poppins',Helvetica] font-semibold ${plan.isPopular ? "text-[#dc143c]" : "text-black"} mb-2 text-center text-xl leading-8 tracking-[-0.50px] whitespace-pre-line`}
                      >
                        {plan.title}
                      </h3>
                      <p className="text-center [font-family:'Poppins',Helvetica] text-sm leading-[22px] font-normal tracking-[0] text-[#303740]">
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
                          <CheckCircle2Icon className="h-4 w-4 text-[#354152]" />
                          <span className="[font-family:'Poppins',Helvetica] text-xs leading-6 font-normal tracking-[0] text-[#354152]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="relative flex w-[180px] flex-col items-center justify-center rounded-[0px_10px_10px_0px] bg-[#f1f1f1]">
                      {plan.isPopular && (
                        <Badge className="absolute top-3 h-[25px] w-[110px] rounded-[40px] border-0 bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] hover:bg-[#dc143c]">
                          <span className="[font-family:'Poppins',Helvetica] text-xs leading-[15.6px] font-semibold tracking-[0] text-white">
                            Most Popular
                          </span>
                        </Badge>
                      )}

                      <div className="mb-4 text-center [font-family:'Poppins',Helvetica] text-3xl leading-[normal] font-semibold tracking-[-0.50px] text-[#dc143c]">
                        {plan.price}
                        {plan.priceUnit && (
                          <span className="text-lg font-medium tracking-[-0.10px] text-black">
                            {plan.priceUnit}
                          </span>
                        )}
                      </div>
                      <Button className="h-[40px] w-[150px] rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#dc143c] hover:text-white">
                        <span className="[font-family:'Poppins',Helvetica] text-sm leading-[20.8px] font-semibold tracking-[0] text-[#dc143c]">
                          Book Now
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="[font-family:'Poppins',Helvetica] text-xl leading-[30px] font-medium tracking-[-0.50px] text-white [text-shadow:0px_2px_6px_#0000004c]">
                Need a custom quote for multiple trips or special requirements?
              </p>
              <Button className="mt-4 h-[60px] w-[350px] rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
                <img
                  className="mr-2 h-[22px] w-[22px]"
                  alt="Phone"
                  src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-4.png"
                />
                <span className="[font-family:'Poppins',Helvetica] text-lg leading-[28.6px] font-bold tracking-[0] text-white">
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
