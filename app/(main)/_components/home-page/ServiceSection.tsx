import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const serviceCards = [
  {
    title: "Airport Pick & Drop",
    description:
      "Reliable pickup and drop-off services to all California airports. Never miss a flight again.",
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-33.png",
    bgColor: "bg-white",
    textColor: "text-black",
    descColor: "text-[#303740]",
  },
  {
    title: "Corporate Rides",
    description:
      "Professional transportation for your daily office commute. Comfortable and punctual service.",
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-34.png",
    bgColor: "bg-[#db143c]",
    textColor: "text-white",
    descColor: "text-white",
  },
  {
    title: "City Pick & Drop",
    description:
      "Explore California cities with our hourly rental service. Perfect for meetings and sightseeing.",
    icon: "https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-35.png",
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
    <section className="relative w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-white" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-[#090909]" />
        <img
          className="absolute top-0 left-0 h-full w-1/2 object-cover"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-2.png"
        />
        <img
          className="absolute top-0 right-0 h-full w-1/2 object-cover"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-6.png"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Services Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="[font-family:'Poppins',Helvetica] text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Service
              </h2>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-lg leading-relaxed font-normal tracking-[-0.50px] text-[#303740]">
                We provide premium transportation services across California
                with professional drivers and luxury vehicles for all your
                travel needs.
              </p>
            </div>
            <div className="space-y-8">
              {serviceCards.map((service, index) => (
                <Card
                  key={index}
                  className={`${service.bgColor} rounded-[10px] border-0 shadow-[0px_0px_10px_#00000026] transition-transform hover:scale-105`}
                >
                  <CardContent className="flex h-full flex-col items-center justify-center p-8">
                    <img
                      className="mb-4 h-[70px] w-[70px]"
                      alt={service.title}
                      src={service.icon}
                    />
                    <h3
                      className={`[font-family:'Poppins',Helvetica] font-semibold ${service.textColor} mb-2 text-center text-xl leading-[normal] tracking-[-0.50px]`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`[font-family:'Poppins',Helvetica] font-normal ${service.descColor} text-center text-base leading-[normal] tracking-[0]`}
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
              <h2 className="[font-family:'Poppins',Helvetica] text-4xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Meet Seung Lee
              </h2>
              <p className="mt-2 [font-family:'Poppins',Helvetica] text-lg leading-8 font-normal tracking-[-0.50px] text-white">
                Your Professional Driver (Company owner)
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {driverBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <img
                      className="h-5 w-5"
                      alt={badge.title}
                      src={badge.icon}
                    />
                  </div>
                  <div>
                    <div className="[font-family:'Poppins',Helvetica] text-base leading-6 font-semibold tracking-[0] text-white">
                      {badge.title}
                    </div>
                    <div className="[font-family:'Poppins',Helvetica] text-sm leading-5 font-normal tracking-[0] text-white">
                      {badge.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center [font-family:'Poppins',Helvetica] text-base leading-[25px] font-normal tracking-[0] text-white">
              I personally drive my own car to ensure every ride is safe,
              comfortable, and always on time. With 30 years of professional
              driving experience—20 in the U.S. and 10 in Canada—I proudly
              maintain a spotless record with zero accidents. I know every road
              in California like the back of my hand, and my car is always clean
              and ready. For me, your safety, time, and trust come
              first—that&apos;s my promise to you.
            </p>

            <div className="relative">
              <img
                className="h-[400px] w-full rounded-[20px] object-cover"
                alt="Driver"
                src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/rectangle-13.png"
              />
              <div className="absolute bottom-[-30px] left-1/2 flex h-[60px] w-60 -translate-x-1/2 transform items-center justify-center gap-[13.8px] rounded-lg bg-white shadow-[0px_0px_6px_#00000033]">
                <img
                  className="h-[16.89px] w-[101.67px]"
                  alt="Rating"
                  src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-24.png"
                />
                <span className="[font-family:'Poppins',Helvetica] text-base leading-8 font-medium tracking-[-1.00px] whitespace-nowrap text-black">
                  5.0 rating
                </span>
              </div>
            </div>

            <Button className="mx-auto flex h-[60px] w-[260px] rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
              <span className="[font-family:'Poppins',Helvetica] text-base leading-[20.8px] font-semibold tracking-[0] text-white">
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
