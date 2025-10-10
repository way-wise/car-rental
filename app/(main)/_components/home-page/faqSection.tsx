import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const FaqSection = () => {
  const faqItems = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 24 hours in advance for airport transfers and 48 hours for special events. However, we also accept last-minute bookings based on availability. For peak seasons and holidays, we suggest booking 1-2 weeks in advance to ensure availability.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your booking up to 2 hours before your scheduled pickup time for a full refund. Cancellations made less than 2 hours before pickup will incur a 50% cancellation fee. No-shows will be charged the full amount. For airport transfers, we offer free cancellation if your flight is delayed by more than 2 hours.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. Payment is required at the time of booking to confirm your reservation. We also accept cash payments for local rides, but advance payment is preferred for airport transfers and long-distance trips.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can modify or cancel your booking through our website, mobile app, or by calling our customer service. Changes to pickup time, location, or vehicle type can be made up to 2 hours before your scheduled pickup. Modifications may be subject to price adjustments based on availability and distance changes.",
    },
    {
      question: "What happens if my flight is delayed?",
      answer:
        "We monitor flight arrivals in real-time and automatically adjust your pickup time for domestic flights. For international flights, please update us as soon as possible. We provide a 30-minute grace period after your flight lands. If your flight is delayed by more than 2 hours, you can cancel free of charge or reschedule at no extra cost.",
    },
    {
      question: "What types of vehicles do you offer?",
      answer:
        "Our fleet includes economy sedans, luxury sedans, SUVs, minivans, and executive vehicles. We also offer wheelchair-accessible vehicles upon request. All vehicles are well-maintained, clean, and equipped with modern amenities. Vehicle availability depends on your location and booking time.",
    },

    {
      question: "Do you offer services outside the city?",
      answer:
        "Yes, we provide long-distance and intercity transportation services. We offer competitive rates for out-of-town trips and can arrange round-trip bookings. For long-distance travel, we recommend booking in advance and may require a minimum booking duration. Contact us for custom quotes for your specific destination.",
    },
  ];
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[url(/assets/images/faq-bg.png)] bg-cover bg-fixed bg-center"
    >
      {/* Background Images */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 container py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xl leading-[30px] font-normal tracking-[-1.00px] text-white">
                Everything you need to know about our services
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col gap-5"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-[10px] border border-[#f1f1f1] bg-white px-8 shadow-[0px_1px_3px_#0000001a]"
                >
                  <AccordionTrigger className="py-6 text-lg leading-[normal] font-medium tracking-[-0.50px] text-black hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  {item.answer && (
                    <AccordionContent className="pb-6 text-base leading-6 font-normal tracking-[0] text-[#303740]">
                      {item.answer}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div>
              <h2 className="text-3xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Have A Question?
              </h2>
              <p className="mt-2 text-xl leading-[30px] font-normal tracking-[-1.00px] text-white">
                Need more details before booking? Just give us a call—we&apos;ll
                handle everything for you.
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="tel:+1-310-756-5533" className="w-full sm:w-[300px]">
                <Button className="h-[60px] w-full cursor-pointer rounded-[40px] bg-primary shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234]">
                  <Phone className="h-12 w-12" />
                  <span className="text-xl leading-[26px] font-bold tracking-[0] text-white">
                    +1-310-756-5533
                  </span>
                </Button>
              </Link>
              <div className="w-full sm:w-[300px]">
                <Button className="group h-[60px] w-full cursor-pointer rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:border-white hover:bg-primary">
                  <span className="text-xl leading-[26px] font-semibold tracking-[0] text-[#dc143c] group-hover:text-white">
                    Book Now
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
