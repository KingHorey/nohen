import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import GradientText from "@/components/gradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import Link from "next/link";

const questions = [
  {
    question: "What services does Nohen Constructii Ltd. offer?",
    answer:
      "Nohen Constructii Ltd. specializes in architectural designs, design consultation, interior design, and full design-and-build services for both complex residential and commercial projects. We also provide professional project management services.",
    value: "services",
  },
  {
    question: "What types of clients do you work with?",
    answer:
      "We work with a wide range of clients including individuals (homeowners), government agencies, and corporate organizations across Nigeria.",
    value: "clients",
  },
  {
    question: "Which parts of Nigeria do you serve?",
    answer:
      "We have successfully executed projects in over 26 states in Nigeria. Wherever your project is located, we have the experience and capacity to deliver.",
    value: "coverage",
  },
  {
    question:
      "What makes Nohen Constructii different from other construction companies?",
    answer:
      "We specialize in taking on challenging and complex projects that many companies tend to avoid - difficult terrains, unique architectural concepts, and technically demanding structures. We run towards difficult projects while others run away from them.",
    value: "difference",
  },
  {
    question: "Do you offer design and build services?",
    answer:
      "Yes. Our core strength is in Design & Build. We handle the architectural design, structural engineering, interior design, and full construction under one roof. We also offer standalone design consultation and project management services.",
    value: "design-build",
  },
  {
    question: "How do you determine the cost of a project?",
    answer:
      "Project pricing is determined based on your specific requirements, design complexity, location, materials chosen, and other project details. We provide detailed, transparent quotations after proper consultation and site assessment.",
    value: "project-cost",
  },
  {
    question: "Can you handle difficult or unusual construction projects?",
    answer:
      "Absolutely. This is one of our biggest strengths. We thrive on complex residential and commercial buildings, difficult terrains, and innovative architectural concepts that others find challenging.",
    value: "complex-projects",
  },
  {
    question: "How do I get started with Nohen Constructii Ltd.?",
    answer:
      "Simply contact us through our website, phone, or email. We will schedule a consultation (physical or virtual), listen to your vision, assess the site if necessary, and provide professional advice and a detailed proposal tailored to your needs.",
    value: "get-started",
  },
];

const Faq = () => {
  return (
    <Reveal>
      <section
        id="faq"
        className="relative bg-white px-5 py-12 md:px-10 h-fit lg:px-10.5 lg:py-0"
      >
        <div className="flex w-full flex-col gap-8 py-24 lg:flex-row lg:justify-between lg:gap-x-10">
          <div className="w-full space-y-3 lg:flex lg:flex-col">
            <GradientText text="You ask, We answer!" />
            <div className="w-full text-black md:w-4/6">
              <p className="font-semibold">
                Still got any questions?{" "}
                <span className="font-light">
                  Contact our Team via support@nohenconstruct.com
                </span>
              </p>
            </div>
            <Button
              asChild
              className="w-full gap-5 gap-x-3 rounded-full bg-black px-5 py-5 text-white sm:w-fit"
            >
              <Link href="/contact#workHours">
                Get In Touch
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
          <Card className="w-full border text-black shadow-none ring-1 ring-gray-300">
            <CardContent>
              <Stagger>
                <Accordion type="single" className="space-y-3">
                  {questions.map(({ question, answer, value }) => (
                    <StaggerItem key={value}>
                      <AccordionItem
                        value={value}
                        className="flex flex-col justify-center gap-2.5 rounded-[24px] bg-[#F6F4F0] px-5 py-5 md:rounded-[30px] md:px-7.5"
                      >
                        <AccordionTrigger className="font-dm-sans text-left font-semibold">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent
                          className="font-satoshi text-base"
                          style={{ color: "gray" }}
                        >
                          {answer}
                        </AccordionContent>
                      </AccordionItem>
                    </StaggerItem>
                  ))}
                </Accordion>
              </Stagger>
            </CardContent>
          </Card>
        </div>
      </section>
    </Reveal>
  );
};

export default Faq;
