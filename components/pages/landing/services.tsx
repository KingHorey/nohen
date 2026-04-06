import Image from "next/image";
import ServicesImage from "@/assets/images/architectural_service.png";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/svgs/arrow.svg";
import Link from "next/link";
import SectionTag from "@/components/sectionTag";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    description:
      "Crafting purposeful architectural designs that combine creativity, functionality, and lasting structural value.",
  },
  {
    id: "interior-design",
    title: "Perfect Interior Designs",
    description:
      "Building a better future with sustainable materials, energy-efficient designs.",
  },
  {
    id: "eco-construction",
    title: "Eco-Friendly Construction",
    description:
      "Our team optimizes layouts to make every corner of your space purposeful and visually balanced.",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Coordinating people, processes, and resources to deliver projects efficiently.",
  },
  {
    id: "renovation",
    title: "Interior Renovation",
    description:
      "Upgrading and refreshing spaces with quality renovations that enhance both beauty and performance.",
  },
  {
    id: "eco-architecture",
    title: "Eco-Conscious Architecture",
    description:
      "Blending innovative design with environmental responsibility to create structures.",
  },
];

const Services = () => {
  return (
    <Reveal>
      <section
        id="services"
        className="relative flex items-center overflow-hidden px-5 py-12 md:max-h-237 md:p-10.5 md:py-16"
      >
        <div className="absolute inset-0">
          <Image
            src={ServicesImage}
            fill
            className="object-cover"
            sizes="100vw"
            alt="nohen contrustii services"
          />
        </div>
        <div className="z-9999 relative flex w-full flex-col justify-center space-y-10">
          <SectionTag className="" text="Our Services" />
          <div>
            <Stagger className="grid grid-cols-1 py-5 font-dm-sans md:grid-cols-2">
              {services.map(({ title, id, description }, index) => (
                <StaggerItem
                  key={id}
                  className={`
        p-5 md:p-6
        border-sidebar-border border-dashed
        ${index % 2 === 0 ? "md:border-r md:border-r-gray-200/10" : ""}
        ${index < services.length - 1 ? "border-b border-gray-100/10" : ""}
        ${index < services.length - 2 ? "md:border-b md:border-gray-100/10" : "md:border-b-0"}
      `}
                >
                  <h4
                    className="text-[28px] uppercase font-medium md:text-[38px]"
                    style={{ letterSpacing: "-4%", lineHeight: "115.5%" }}
                  >
                    {title}
                  </h4>
                  <p
                    className="font-outfit text-left text-[18px] font-light md:text-justify md:text-[20px]"
                    style={{
                      color: "gray",
                      lineHeight: "1.4",
                    }}
                  >
                    {description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="flex w-full items-center justify-center pt-4 md:pt-0">
              <Button
                className="mx-auto h-14 w-full gap-5 rounded-full px-[14.15px] py-[9.9px] text-black uppercase font-semibold sm:w-fit md:h-17.5 md:w-69.25"
                style={{ backgroundColor: "#EFBF04" }}
                asChild
              >
                <Link href="/services" className="gap-3">
                  <p className="text-sm! font-dm-sans">More of our services</p>
                  <ArrowIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Services;
