import { Card, CardContent } from "@/components/ui/card";
const Testimonial = () => {
  const howItWorksSteps = [
    {
      number: "1",
      title: "Book Online",
      description:
        "Choose your pickup and drop-off locations, select date and time through our simple booking form.",
      icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-3.png",
    },
    {
      number: "2",
      title: "Get Confirmation",
      description:
        "Receive instant confirmation with driver details and estimated arrival time via email or SMS.",
      icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/icon-2.svg",
    },
    {
      number: "3",
      title: "Enjoy Your Ride",
      description:
        "Relax in comfort as your professional driver takes you safely to your destination on time.",
      icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-1.png",
    },
  ];
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-3.png"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* How It Works Section */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                How It Works
              </h2>
              <p className="mt-2 text-lg leading-relaxed font-normal tracking-[-0.50px] text-[#303740]">
                Three simple steps to your perfect ride
              </p>
            </div>
            <div className="space-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[45px] bg-[#dc143c]">
                      <img
                        className={
                          index === 0
                            ? "h-[37px] w-[27px]"
                            : index === 1
                              ? "h-10 w-10"
                              : "h-[25px] w-[44px]"
                        }
                        alt={step.title}
                        src={step.icon}
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black">
                      <span className="text-center text-sm leading-5 font-bold tracking-[0] text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl leading-[normal] font-medium tracking-[-0.50px] text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-[normal] font-normal tracking-[0] text-[#30363f]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-1.00px] text-white lg:text-5xl">
                What Our Clients Say
              </h2>
              <p className="mt-2 text-xl leading-8 font-normal tracking-[-1.00px] text-white">
                Trusted by hundreds of satisfied customers
              </p>
            </div>
            <Card className="rounded-[20px] border-0 bg-white">
              <CardContent className="flex h-full flex-col items-center justify-center p-8">
                <img
                  className="mb-8 h-[21px] w-[126px]"
                  alt="Stars"
                  src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png"
                />
                <p className="mb-12 text-center text-xl leading-8 font-normal tracking-[-0.50px] text-black">
                  &quot;I have been using this service for over a year now. The
                  consistency and quality are unmatched. John is courteous,
                  knowledgeable about the area, and always makes the ride
                  comfortable.&quot;
                </p>
                <div className="flex items-center gap-5">
                  <img
                    className="h-16 w-16 rounded-full"
                    alt="Emily Rodriguez"
                    src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-10.png"
                  />
                  <div>
                    <div className="text-base leading-[normal] font-medium tracking-[-0.50px] text-[#dc143c]">
                      Emily Rodriguez
                    </div>
                    <div className="text-sm leading-[normal] font-normal tracking-[-0.50px] text-[#303740]">
                      Marketing Director
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <img
                className="h-[72px] w-28"
                alt="Navigation"
                src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-41.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
