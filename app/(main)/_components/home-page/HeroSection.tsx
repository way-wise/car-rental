import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          alt="Chicago skyline"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/chicago-skyline-panorama-aerial-view-with-skyscrapers-lake-michi.png"
        />
        <div className="absolute inset-0 bg-[#00000080]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid min-h-[600px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in [--animation-delay:600ms]">
              <h1 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Reliable Airport & City Rides
                <br />
                in California
              </h1>
            </div>
            <p className="animate-fade-in text-lg leading-relaxed font-normal tracking-[-0.50px] text-white [--animation-delay:800ms]">
              Experience premium transportation with our professional drivers.
              Safe, comfortable, and always on time.
            </p>
            <Card className="animate-fade-in rounded-[34px] border-0 bg-[#ffffff33] shadow-[0px_-1.5px_0px_#ffffff66] backdrop-blur-[5px] backdrop-brightness-[100%] [--animation-delay:1000ms] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
              <CardContent className="p-8">
                <h2 className="mb-6 text-xl leading-[normal] font-semibold tracking-[-0.50px] text-white">
                  Quick Booking
                </h2>
                <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Pickup Location
                      </label>
                    </div>
                    <Input
                      placeholder="Enter pickup address"
                      className="h-[41px] rounded-md border-0 bg-white text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Drop Location
                      </label>
                    </div>
                    <Input
                      placeholder="Enter drop address"
                      className="h-[41px] rounded-md border-0 bg-white text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Date
                      </label>
                    </div>
                    <Input
                      placeholder="Select date"
                      className="h-[41px] rounded-md border-0 bg-white text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-white" />
                      <label className="text-base leading-[normal] font-normal tracking-[0] text-white">
                        Time
                      </label>
                    </div>
                    <Input
                      placeholder="Select time"
                      className="h-[41px] rounded-md border-0 bg-white text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                    />
                  </div>
                </div>
                <Button className="h-[50px] w-full rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
                  <span className="text-base leading-[20.8px] font-semibold tracking-[0] text-white">
                    Book Now
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Decorative Images */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
