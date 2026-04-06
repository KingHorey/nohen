import Hero from "@/components/hero";
import ContactPageImage from "@/assets/images/8c932b523e4b2ff92f31dfefeb471cd8993c0693.png";
import ContactCardF from "@/components/pages/contact/contactCards";
import ScheduledHours from "@/components/pages/contact/scheduledHours";
import Connect from "@/components/pages/contact/connect";
import PageFade from "@/components/animations/pageFade";

const Page = () => {
  return (
    <PageFade>
      <div className="overflow-x-hidden">
        <Hero
          title="your IDEAS TAKE SHAPE WHEN YOU REACH OUT!"
          alt=""
          image={ContactPageImage}
          buttonText="Start a project"
          isLink={true}
          buttonLink="#contactForm"
          description="Discover our collection of modern architectural solutions for beautiful home. interiors with exceptional craftsmanship."
          metaText=""
        />
        <ContactCardF />
        <ScheduledHours />
        <Connect />
      </div>
    </PageFade>
  );
};

export default Page;
