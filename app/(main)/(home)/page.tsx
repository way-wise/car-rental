import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CalendarIcon,
  CheckCircle2Icon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Driver", href: "#about" },
];

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

const faqItems = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 24 hours in advance for airport transfers and 48 hours for special events. However, we also accept last-minute bookings based on availability.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "",
  },
  {
    question: "What payment methods do you accept?",
    answer: "",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "",
  },
  {
    question: "What happens if my flight is delayed?",
    answer: "",
  },
];

const carImages = [
  "https://c.animaapp.com/mgdxk0bzO3P1u7/img/rectangle-106.png",
  "https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-8.png",
  "https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-9.png",
];

const LandingPage = () => {
  return (
    <div
      className="relative min-h-[7719px] w-full min-w-[1920px] bg-white"
      data-model-id="123:1312"
    >
      <div className="absolute top-[1906px] left-[960px] h-[992px] w-[960px] bg-white" />
      <img
        className="absolute top-[1906px] left-[960px] h-[992px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group.png"
      />
      <div className="absolute top-[1906px] left-0 h-[992px] w-[960px] bg-[#090909]" />
      <div className="absolute top-[2898px] right-0 h-[1154px] w-[960px] bg-[#090909]" />
      <div className="absolute top-[2898px] left-0 h-[1154px] w-[960px] bg-white" />
      <section className="absolute top-0 left-0 h-[799px] w-[1920px]">
        <img
          className="h-full w-full object-cover"
          alt="Chicago skyline"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/chicago-skyline-panorama-aerial-view-with-skyscrapers-lake-michi.png"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[#00000080]" />
        <header className="animate-fade-in absolute top-0 left-0 flex w-full translate-y-[-1rem] items-center justify-between px-[255px] py-[26px] opacity-0">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10"
              alt="Container"
              src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/container.svg"
            />
            <div className="[font-family:'Poppins',Helvetica] text-xl leading-7 font-semibold tracking-[0] whitespace-nowrap text-white">
              CarRide California
            </div>
          </div>
          <nav className="animate-fade-in flex translate-y-[-1rem] gap-8 opacity-0 [--animation-delay:200ms]">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Poppins',Helvetica] text-base leading-6 font-medium tracking-[0] whitespace-nowrap text-white transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button className="animate-fade-in h-[50px] translate-y-[-1rem] rounded-[40px] bg-[#dc143c] opacity-0 shadow-[inset_0px_-1px_0px_#00000040] transition-colors [--animation-delay:400ms] hover:bg-[#c01234]">
            <img
              className="mr-2 h-4 w-4"
              alt="Phone"
              src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group.png"
            />
            <span className="[font-family:'Poppins',Helvetica] text-lg leading-[23.4px] font-semibold tracking-[0] text-white">
              +1-310-756-5533
            </span>
          </Button>
        </header>
        <div className="animate-fade-in absolute top-[151px] left-[345px] w-[553px] translate-y-[-1rem] opacity-0 [--animation-delay:600ms]">
          <h1 className="[font-family:'Poppins',Helvetica] text-[40px] leading-[normal] font-semibold tracking-[-0.50px] text-white">
            Reliable Airport & City Rides
            <br />
            in California
          </h1>
        </div>
        <p className="animate-fade-in absolute top-[277px] left-[345px] w-[490px] translate-y-[-1rem] [font-family:'Poppins',Helvetica] text-base leading-[25px] font-normal tracking-[-0.50px] text-white opacity-0 [--animation-delay:800ms]">
          Experience premium transportation with our professional drivers. Safe,
          comfortable, and always on time.
        </p>
        <Card className="animate-fade-in absolute top-[350px] left-[345px] h-[336px] w-[540px] translate-y-[-1rem] rounded-[34px] border-0 bg-[#ffffff33] opacity-0 shadow-[0px_-1.5px_0px_#ffffff66] backdrop-blur-[5px] backdrop-brightness-[100%] [--animation-delay:1000ms] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
          <CardContent className="p-[30px]">
            <h2 className="mb-[25px] [font-family:'Poppins',Helvetica] text-xl leading-[normal] font-semibold tracking-[-0.50px] text-white">
              Quick Booking
            </h2>
            <div className="mb-8 grid grid-cols-2 gap-5">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-white" />
                  <label className="[font-family:'Poppins',Helvetica] text-base leading-[normal] font-normal tracking-[0] text-white">
                    Pickup Location
                  </label>
                </div>
                <Input
                  placeholder="Enter pickup address"
                  className="h-[41px] rounded-md border-0 bg-white [font-family:'Poppins',Helvetica] text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-white" />
                  <label className="[font-family:'Poppins',Helvetica] text-base leading-[normal] font-normal tracking-[0] text-white">
                    Drop Location
                  </label>
                </div>
                <Input
                  placeholder="Enter drop address"
                  className="h-[41px] rounded-md border-0 bg-white [font-family:'Poppins',Helvetica] text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-white" />
                  <label className="[font-family:'Poppins',Helvetica] text-base leading-[normal] font-normal tracking-[0] text-white">
                    Date
                  </label>
                </div>
                <Input
                  placeholder="Select date"
                  className="h-[41px] rounded-md border-0 bg-white [font-family:'Poppins',Helvetica] text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                />
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-white" />
                  <label className="[font-family:'Poppins',Helvetica] text-base leading-[normal] font-normal tracking-[0] text-white">
                    Time
                  </label>
                </div>
                <Input
                  placeholder="Select time"
                  className="h-[41px] rounded-md border-0 bg-white [font-family:'Poppins',Helvetica] text-sm font-light text-[#677485] shadow-[0px_0px_2px_#00000066]"
                />
              </div>
            </div>
            <Button className="h-[50px] w-full rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
              <span className="[font-family:'Poppins',Helvetica] text-base leading-[20.8px] font-semibold tracking-[0] text-white">
                Book Now
              </span>
            </Button>
          </CardContent>
        </Card>
        <img
          className="absolute top-0 left-[1028px] h-[799px] w-[890px]"
          alt="Vector"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/vector-3.svg"
        />
        <img
          className="absolute top-0 left-[1019px] h-[799px] w-[486px]"
          alt="Subtract"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/subtract.svg"
        />
        <img
          className="absolute top-0 left-[1028px] h-[799px] w-[890px]"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-1.png"
        />
      </section>
      <div className="absolute top-[799px] left-0 h-[1107px] w-[960px] bg-white" />
      <div className="absolute top-[799px] right-0 h-[1107px] w-[960px] bg-[#090909]" />
      <img
        className="absolute top-[799px] left-0 h-[1107px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-2.png"
      />
      <section className="absolute top-[877px] left-[255px] h-[964px] w-[466px]">
        <h2 className="text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[80px] font-semibold tracking-[-0.50px] text-black">
          Service
        </h2>
        <p className="mt-[6px] text-center [font-family:'Poppins',Helvetica] text-lg leading-[26px] font-normal tracking-[-0.50px] text-[#303740]">
          We provide premium transportation services across California with
          professional drivers and luxury vehicles for all your travel needs.
        </p>
        <div className="mt-[30px] flex flex-col gap-[30px]">
          {serviceCards.map((service, index) => (
            <Card
              key={index}
              className={`h-[234px] w-96 ${service.bgColor} rounded-[10px] border-0 shadow-[0px_0px_10px_#00000026] transition-transform hover:scale-105`}
            >
              <CardContent className="flex h-full flex-col items-center justify-center p-[30px]">
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
      </section>
      <img
        className="absolute top-[799px] left-[960px] h-[1107px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-6.png"
      />
      <section className="absolute top-[877px] left-[1106px] h-[919px] w-[674px]">
        <h2 className="w-[665px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[80px] font-semibold tracking-[-0.50px] text-white">
          Meet Seung Lee
        </h2>
        <p className="mt-[6px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-lg leading-8 font-normal tracking-[-0.50px] text-white">
          Your Professional Driver (Company owner)
        </p>
        <div className="mt-[51px] flex gap-[70px]">
          {driverBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-[10px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <img className="h-5 w-5" alt={badge.title} src={badge.icon} />
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
        <p className="mt-[66px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-base leading-[25px] font-normal tracking-[0] text-white">
          I personally drive my own car to ensure every ride is safe,
          comfortable, and always on time. With 30 years of professional driving
          experience—20 in the U.S. and 10 in Canada—I proudly maintain a
          spotless record with zero accidents. I know every road in California
          like the back of my hand, and my car is always clean and ready. For
          me, your safety, time, and trust come first—that&apos;s my promise to
          you.
        </p>
        <div className="relative mt-[66px]">
          <img
            className="h-[448px] w-[686px] rounded-[20px] object-cover"
            alt="Driver"
            src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/rectangle-13.png"
          />
          <div className="absolute bottom-[-60px] left-0.5 flex h-[60px] w-60 items-center justify-center gap-[13.8px] bg-white shadow-[0px_0px_6px_#00000033]">
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
        <Button className="mx-auto mt-[26px] flex h-[60px] w-[260px] rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
          <span className="[font-family:'Poppins',Helvetica] text-base leading-[20.8px] font-semibold tracking-[0] text-white">
            Book Your Ride
          </span>
        </Button>
      </section>
      <img
        className="absolute top-[1906px] left-0 h-[992px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-3.png"
      />
      <section className="absolute top-[2067px] left-[147px] h-[671px] w-[671px]">
        <h2 className="w-[665px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[80px] font-semibold tracking-[-1.00px] text-white">
          What Our Clients Say
        </h2>
        <p className="mt-[6px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-xl leading-8 font-normal tracking-[-1.00px] text-white">
          Trusted by hundreds of satisfied customers
        </p>
        <Card className="mt-[83px] h-[400px] w-[665px] rounded-[20px] border-0 bg-white">
          <CardContent className="flex h-full flex-col items-center justify-center p-[33px]">
            <img
              className="mb-[33px] h-[21px] w-[126px]"
              alt="Stars"
              src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-19.png"
            />
            <p className="mb-[54px] w-[600px] text-center [font-family:'Poppins',Helvetica] text-xl leading-8 font-normal tracking-[-0.50px] text-black">
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
                <div className="[font-family:'Poppins',Helvetica] text-base leading-[normal] font-medium tracking-[-0.50px] text-[#dc143c]">
                  Emily Rodriguez
                </div>
                <div className="[font-family:'Poppins',Helvetica] text-sm leading-[normal] font-normal tracking-[-0.50px] text-[#303740]">
                  Marketing Director
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <img
          className="absolute top-[599px] left-[277px] h-[72px] w-28"
          alt="Navigation"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-41.png"
        />
      </section>
      <section className="absolute top-[1983px] left-[1215px] h-[821px] w-[466px]">
        <h2 className="w-[450px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[80px] font-semibold tracking-[-0.50px] text-black">
          How It Works
        </h2>
        <p className="mt-[6px] w-[450px] text-center [font-family:'Poppins',Helvetica] text-lg leading-[26px] font-normal tracking-[-0.50px] text-[#303740]">
          Three simple steps to your perfect ride
        </p>
        <div className="mt-[89px] flex flex-col gap-[51px]">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-[45px] bg-[#dc143c]">
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
              <div className="absolute top-[-13px] left-[173px] flex h-8 w-8 items-center justify-center rounded-full bg-black">
                <span className="text-center [font-family:'Poppins',Helvetica] text-sm leading-5 font-bold tracking-[0] text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-[11px] w-[450px] text-center [font-family:'Poppins',Helvetica] text-2xl leading-[normal] font-medium tracking-[-0.50px] text-black">
                {step.title}
              </h3>
              <p className="mt-[9px] w-[447px] text-center [font-family:'Poppins',Helvetica] text-base leading-[normal] font-normal tracking-[0] text-[#30363f]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <img
        className="absolute top-[2898px] left-[960px] h-[1154px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-7.png"
      />
      <section className="absolute top-[2976px] left-[1089px] h-[1012px] w-[708px]">
        <h2 className="ml-[19px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[70px] font-semibold tracking-[-0.50px] text-white">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-[13px] ml-[19px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-xl leading-[30px] font-normal tracking-[-1.00px] text-white">
          No hidden fees, no surge pricing. Just honest, upfront rates for
          professional transportation services across California.
        </p>
        <div className="mt-[22px] ml-[19px] flex flex-col gap-[15px]">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`h-[190px] w-[665px] rounded-[10px] bg-white ${
                plan.isPopular
                  ? "border-2 border-[#dc143c] shadow-[0px_4px_10px_#dc143c99]"
                  : "border border-[#f1f1f1] shadow-[0px_1px_3px_#0000001a]"
              } relative`}
            >
              <CardContent className="flex h-full p-0">
                <div className="flex flex-1 flex-col items-center justify-center p-[17px]">
                  <h3
                    className={`[font-family:'Poppins',Helvetica] font-semibold ${plan.isPopular ? "text-[#dc143c]" : "text-black"} mb-[9px] text-center text-2xl leading-8 tracking-[-0.50px] whitespace-pre-line`}
                  >
                    {plan.title}
                  </h3>
                  <p className="w-[188px] text-center [font-family:'Poppins',Helvetica] text-[15px] leading-[22px] font-normal tracking-[0] text-[#303740]">
                    {plan.description}
                  </p>
                </div>
                <div className="h-40 w-px self-center bg-[#ececec]" />
                <div className="flex flex-1 flex-col justify-center p-[17px]">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="mb-[9px] flex items-center gap-3"
                    >
                      <CheckCircle2Icon className="h-5 w-5 text-[#354152]" />
                      <span className="[font-family:'Poppins',Helvetica] text-sm leading-6 font-normal tracking-[0] text-[#354152]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative flex w-[200px] flex-col items-center justify-center rounded-[0px_10px_10px_0px] bg-[#f1f1f1]">
                  {plan.isPopular && (
                    <Badge className="absolute top-5 h-[30px] w-[130px] rounded-[40px] border-0 bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] hover:bg-[#dc143c]">
                      <span className="[font-family:'Poppins',Helvetica] text-xs leading-[15.6px] font-semibold tracking-[0] text-white">
                        Most Popular
                      </span>
                    </Badge>
                  )}

                  <div className="mb-[21px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[normal] font-semibold tracking-[-0.50px] text-[#dc143c]">
                    {plan.price}
                    {plan.priceUnit && (
                      <span className="text-xl font-medium tracking-[-0.10px] text-black">
                        {plan.priceUnit}
                      </span>
                    )}
                  </div>
                  <Button className="h-[46px] w-[170px] rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#dc143c] hover:text-white">
                    <span className="[font-family:'Poppins',Helvetica] text-base leading-[20.8px] font-semibold tracking-[0] text-[#dc143c]">
                      Book Now
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-[27px] w-[702px] text-center [font-family:'Poppins',Helvetica] text-2xl leading-[30px] font-medium tracking-[-0.50px] text-white [text-shadow:0px_2px_6px_#0000004c]">
          Need a custom quote for multiple trips or special requirements?
        </p>
        <Button className="mt-5 ml-[151px] h-[70px] w-[400px] rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
          <img
            className="mr-2 h-[22px] w-[22px]"
            alt="Phone"
            src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-4.png"
          />
          <span className="[font-family:'Poppins',Helvetica] text-[22px] leading-[28.6px] font-bold tracking-[0] text-white">
            +1-310-756-5533
          </span>
        </Button>
      </section>
      <section className="absolute top-[2976px] left-[255px] w-[450px]">
        <h2 className="text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[80px] font-semibold tracking-[-0.50px] text-black">
          Our Luxury Car
        </h2>
        <p className="mt-[5px] text-center [font-family:'Poppins',Helvetica] text-xl leading-8 font-normal tracking-[-0.50px] text-[#303740]">
          Clean, comfortable, and well-maintained—our luxury car makes every
          ride smooth and stylish.
        </p>
        <div className="mt-[56px] flex flex-col gap-[30px]">
          {carImages.map((image, index) => (
            <div
              key={index}
              className="h-[342px] w-[570px] overflow-hidden rounded-[20px] bg-[#131417] transition-transform hover:scale-105"
            >
              <img
                className="h-full w-full object-cover"
                alt={`Car ${index + 1}`}
                src={image}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="absolute top-[5218px] right-0 h-[947px] w-[960px] bg-white" />
      <div className="absolute top-[5218px] left-0 h-[947px] w-[960px] bg-[#090909]" />
      <img
        className="absolute top-[5218px] left-0 h-[947px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-4.png"
      />
      <section className="absolute top-[5555px] left-[147px] h-[273px] w-[669px]">
        <h2 className="w-[665px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[80px] font-semibold tracking-[-0.50px] text-white">
          Have A Question?
        </h2>
        <p className="mt-[11px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-xl leading-[30px] font-normal tracking-[-1.00px] text-white">
          Need more details before booking? Just give us a call—we&apos;ll
          handle everything for you.
        </p>
        <div className="mt-[62px] flex justify-center gap-5">
          <Button className="h-[60px] w-[300px] rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
            <img
              className="mr-2 h-[22px] w-[22px]"
              alt="Phone"
              src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-2.png"
            />
            <span className="[font-family:'Poppins',Helvetica] text-xl leading-[26px] font-bold tracking-[0] text-white">
              +1-310-756-5533
            </span>
          </Button>
          <Button className="h-[60px] w-[300px] rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#dc143c] hover:text-white">
            <span className="[font-family:'Poppins',Helvetica] text-xl leading-[26px] font-semibold tracking-[0] text-[#dc143c]">
              Book Now
            </span>
          </Button>
        </div>
      </section>
      <img
        className="absolute top-[5218px] left-[960px] h-[947px] w-[960px]"
        alt="Mask group"
        src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-5.png"
      />
      <section className="absolute top-[5295px] left-[1108px] h-[770px] w-[681px]">
        <h2 className="w-[665px] text-center [font-family:'Poppins',Helvetica] text-[50px] leading-[normal] font-semibold tracking-[-0.50px] text-black">
          Frequently Asked Questions
        </h2>
        <p className="mt-[54px] w-[665px] text-center [font-family:'Poppins',Helvetica] text-xl leading-[30px] font-normal tracking-[-1.00px] text-[#303740]">
          Everything you need to know about our services
        </p>
        <Accordion
          type="single"
          collapsible
          className="mt-[62px] flex w-[665px] flex-col gap-[20px]"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-[10px] border border-[#f1f1f1] bg-white px-[30px] shadow-[0px_1px_3px_#0000001a]"
            >
              <AccordionTrigger className="py-[26px] [font-family:'Poppins',Helvetica] text-2xl leading-[normal] font-medium tracking-[-0.50px] text-black hover:no-underline">
                {item.question}
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="pb-[26px] [font-family:'Poppins',Helvetica] text-base leading-6 font-normal tracking-[0] text-[#303740]">
                  {item.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default LandingPage;
