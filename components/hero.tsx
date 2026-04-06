"use client";

import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  metaText: ReactNode;
  buttonText: string;
  buttonLink: string;
  isLink: boolean;
}

const Hero = ({
  image,
  alt,
  title,
  description,
  metaText,
  buttonLink,
  buttonText,
  isLink,
}: HeroProps) => {
  return (
    <section className="relative w-full min-h-svh overflow-hidden z-50 p-4">
      <div className="inset-0 absolute h-full">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="absolute top-32 md:top-38  pl-5 flex flex-col uppercase">
        <p
          className="text-[120px] md:text-[300px] lg:text-[437.79px] bg-gradient-to-r  relative to-[#EFBF04]/5 from-[#ffffff]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Nohen
        </p>
        <p
          className="text-[70px] md:text-[120px] lg:text-[230px] bg-gradient-to-r relative to-[#EFBF04]/5 from-[#ffffff]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Constructii.
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-14 w-full font-extrabold z-999999 px-8">
        <div className="w-full lg:w-325 space-y-5 text-wrap">
          <p
            className="bg-gradient-to-b tracking-tight via-[#ffffff]/80 via-1% uppercase to-[#EFBF04] bg-clip-text text-transparent relative z-[9999] text-[40px] sm:text-[55px] md:text-[80px] lg:text-[100px] font-dm-sans whitespace-normal wrap-break-word w-full lg:max-w-full sm:max-w-[90%]"
            style={{ letterSpacing: "-11%", lineHeight: "95%" }}
          >
            {title}
          </p>
          <p
            className="md:w-4/6 font-normal text-white font-satoshi text-[15px] sm:text-[20px] text-wrap wrap-anywhere lg:text-[25px] w-full"
            style={{
              letterSpacing: "-6%",
              lineHeight: "108%",
            }}
          >
            {description}
          </p>
          {metaText}
          <Button
            className="bg-[#EFBF04] min-w-56.25 font-dm-sans hover:bg-[#EFBF04]/80 py-4 h-17.5 px-6 rounded-full text-black uppercase"
            asChild={isLink && true}
          >
            {isLink ? (
              <Link href={buttonLink} className="flex items-center gap-x-5">
                {buttonText}
                <ArrowRightIcon />
              </Link>
            ) : (
              <>
                {buttonText} <ArrowRightIcon />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
