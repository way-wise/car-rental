import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FaqSection = () => {
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
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-[#090909]" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-white" />
        <img
          className="absolute top-0 left-0 h-full w-1/2 object-cover"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-4.png"
        />
        <img
          className="absolute top-0 right-0 h-full w-1/2 object-cover"
          alt="Mask group"
          src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/mask-group-5.png"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Section */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-white lg:text-5xl">
                Have A Question?
              </h2>
              <p className="mt-2 text-xl leading-[30px] font-normal tracking-[-1.00px] text-white">
                Need more details before booking? Just give us a call—we&apos;ll
                handle everything for you.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5 sm:flex-row">
              <Button className="h-[60px] w-full rounded-[40px] bg-[#dc143c] shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#c01234] sm:w-[300px]">
                <img
                  className="mr-2 h-[22px] w-[22px]"
                  alt="Phone"
                  src="https://c.animaapp.com/mgdxk0bzO3P1u7/img/group-2.png"
                />
                <span className="text-xl leading-[26px] font-bold tracking-[0] text-white">
                  +1-310-756-5533
                </span>
              </Button>
              <Button className="h-[60px] w-full rounded-[40px] border border-[#dc143c] bg-white shadow-[inset_0px_-1px_0px_#00000040] transition-colors hover:bg-[#dc143c] hover:text-white sm:w-[300px]">
                <span className="text-xl leading-[26px] font-semibold tracking-[0] text-[#dc143c]">
                  Book Now
                </span>
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl leading-tight font-semibold tracking-[-0.50px] text-black lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xl leading-[30px] font-normal tracking-[-1.00px] text-[#303740]">
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
                  <AccordionTrigger className="py-6 text-xl leading-[normal] font-medium tracking-[-0.50px] text-black hover:no-underline">
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
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
