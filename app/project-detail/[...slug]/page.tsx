"use client";

import HillTop from "@/assets/images/hilltop_residence.png";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectHero from "@/components/projectHero";
import ProjectDetailConstruction from "@/assets/images/project_detail1.png";
import ProjectDetailFrontElevation from "@/assets/images/project_detail.png";
import ProjectDetailMainFacade from "@/assets/images/project_detail2.png";
import ProjectDetailFoundation from "@/assets/images/project_detail5.png";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const PROJECT_IMAGES = [
  {
    id: 1,
    label: "Construction Progress",
    src: ProjectDetailConstruction,
  },
  {
    id: 2,
    label: "Front Elevation",
    src: ProjectDetailFrontElevation,
  },
  {
    id: 3,
    label: "Main Facade",
    src: ProjectDetailMainFacade,
  },
  {
    id: 4,
    label: "Foundation Works",
    src: ProjectDetailFoundation,
  },
];

const CARD_WIDTH = 402;
const CARD_HEIGHT = 462;
const CARD_GAP = 12;

export default function ProjectDetail() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => setViewportWidth(viewport.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.dataset.projectGalleryOpen = isGalleryOpen ? "true" : "false";
    document.body.style.overflow = isGalleryOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.projectGalleryOpen;
    };
  }, [isGalleryOpen]);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, PROJECT_IMAGES.length - 1));
    setActiveIndex(clamped);
  };

  const openGallery = () => {
    setGalleryIndex(activeIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const showGalleryPrev = () => {
    setGalleryIndex((index) =>
      Math.max(0, Math.min(index - 1, PROJECT_IMAGES.length - 1)),
    );
  };

  const showGalleryNext = () => {
    setGalleryIndex((index) =>
      Math.max(0, Math.min(index + 1, PROJECT_IMAGES.length - 1)),
    );
  };

  const trackTransform = useMemo(() => {
    const offset =
      viewportWidth / 2 -
      (activeIndex * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2);

    return `translateX(${offset}px)`;
  }, [activeIndex, viewportWidth]);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <ProjectHero image={HillTop} text="Hilltop Residence Abuja" alt="" />
      <section className="max-w-8xl mx-auto grid grid-cols-1 gap-8 border-b-2 border-b-gray-400/20 px-5 pt-0 pb-0 md:grid-cols-[500px_1fr] md:gap-12 md:px-8">
        <div className="md:border-r-2 md:border-r-gray-400/20 border-b border-b-gray-400/20 md:border-b-0">
          <div className="py-8 md:py-10">
            <h2
              className="text-3xl md:text-5xl font-medium leading-tight mb-3"
              style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
            >
              Details about
              <br />
              the project
            </h2>
            <p
              className="text-base sm:text-lg md:text-2xl font-satoshi text-black/50 mb-8 leading-relaxed"
              style={{ lineHeight: "120%" }}
            >
              Unleashing the energy of innovation through intelligent,
              performance-driven design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p
                  className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1"
                  style={{ letterSpacing: "-4%", lineHeight: "118%" }}
                >
                  Client
                </p>
                <p
                  className="text-xl md:text-2xl font-medium"
                  style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
                >
                  Sarah Collins
                </p>
              </div>
              <div>
                <p
                  className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1"
                  style={{ letterSpacing: "-4%", lineHeight: "118%" }}
                >
                  Location
                </p>
                <p
                  className="text-xl md:text-2xl font-medium"
                  style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
                >
                  Nijmegen, NED
                </p>
              </div>
              <div>
                <p
                  className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1"
                  style={{ letterSpacing: "-4%", lineHeight: "118%" }}
                >
                  Total Area
                </p>
                <p
                  className="text-xl md:text-2xl font-medium"
                  style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
                >
                  1209 sqm
                </p>
              </div>
              <div>
                <p
                  className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1"
                  style={{ letterSpacing: "-4%", lineHeight: "118%" }}
                >
                  Timeline
                </p>
                <p
                  className="text-xl md:text-2xl font-medium"
                  style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
                >
                  2014
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-8 md:py-10">
            <h1
              className="text-3xl md:text-5xl font-medium leading-tight mb-6"
              style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
            >
              Hilltop Residence represents the intersection of energy and design
            </h1>
            <div
              className="space-y-4 text-base sm:text-lg md:text-2xl font-satoshi text-gray-400 leading-relaxed"
              style={{ letterSpacing: "-4%", lineHeight: "120%" }}
            >
              <p>
                Nohen Constructii Ltd is an architectural and construction
                practice dedicated to delivering thoughtful, enduring, and
                well-executed built environments. For nearly a decade, the firm
                has built a reputation for translating ideas into functional,
                elegant structures that respond to both human needs and
                environmental context. Our work reflects a commitment to
                clarity, precision, and timeless design.
              </p>
              <p>
                Since its establishment, the company has successfully
                contributed to a diverse range of projects, approaching each one
                with a balance of creativity and technical expertise. We believe
                that architecture is more than building; it is the creation of
                spaces that inspire, serve, and endure. Our process is guided by
                collaboration, attention to detail, and a deep understanding of
                our clients&apos; vision.
              </p>
              <p>
                At Nohen Constructii Ltd, we remain committed to excellence,
                innovation, and integrity in every phase of design and
                construction, continually shaping environments that stand as
                lasting expressions of quality and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 text-center">
          <h2
            className="text-3xl font-dm-sans md:text-5xl font-medium mb-2"
            style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
          >
            Different view of the project
          </h2>
          <p
            className="text-base md:text-2xl font-satoshi text-gray-400"
            style={{ letterSpacing: "-4%", lineHeight: "120%" }}
          >
            Good design is invisible. It supports life quietly,
            <br className="hidden md:block" />
            with clarity and purpose.
          </p>
        </div>

        {/* Centered Strip */}
        <div ref={viewportRef} className="w-full overflow-hidden py-8 md:py-10">
          <div
            className="flex w-max items-center transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: trackTransform,
              gap: `${CARD_GAP}px`,
            }}
          >
            {PROJECT_IMAGES.map((img, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={img.id}
                  onClick={() => scrollToIndex(i)}
                  className="relative shrink-0 cursor-pointer overflow-hidden transition-transform duration-500 ease-out"
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    borderRadius: 4,
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                    transformOrigin: "center center",
                    zIndex: isActive ? 20 : 10,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover z-0"
                    sizes="402px"
                  />
                  {isActive && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openGallery();
                      }}
                      className="absolute left-1/2 top-1/2 z-10 flex h-44.5 w-52.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-center shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#181818]">
                        Click to expand
                      </span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {isGalleryOpen && (
          <div className="fixed inset-0 z-999999 flex items-center justify-center bg-black/80 px-4 py-8">
            <button
              type="button"
              aria-label="Close gallery"
              onClick={closeGallery}
              className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              ✕
            </button>

            <div className="relative z-10 w-full max-w-5xl">
              <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-black/30">
                <Image
                  src={PROJECT_IMAGES[galleryIndex].src}
                  alt={PROJECT_IMAGES[galleryIndex].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
              </div>

              <div className="pointer-events-none absolute left-0 top-1/2 flex w-full -translate-y-1/2 items-center justify-between px-0 sm:px-0">
                <button
                  type="button"
                  onClick={showGalleryPrev}
                  disabled={galleryIndex === 0}
                  className="pointer-events-auto ml-[-18px] flex size-12 items-center justify-center rounded-full bg-white/80 text-black shadow-lg transition-all hover:scale-105 disabled:opacity-30 sm:size-14"
                >
                  <ChevronLeftIcon className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={showGalleryNext}
                  disabled={galleryIndex === PROJECT_IMAGES.length - 1}
                  className="pointer-events-auto mr-[-18px] flex size-12 items-center justify-center rounded-full bg-[#EFBF04] text-black shadow-lg transition-all hover:scale-105 disabled:opacity-30 sm:size-14"
                >
                  <ChevronRightIcon className="size-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-black hover:border-white/50 hover:text-white disabled:opacity-20 transition-all duration-200"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === PROJECT_IMAGES.length - 1}
            className="w-10 h-10 rounded-full bg-[#EFBF04] flex items-center justify-center text-[#181818] font-bold hover:bg-[#d4ab00] disabled:opacity-20 transition-all duration-200"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}
