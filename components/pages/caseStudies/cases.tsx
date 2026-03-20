import GradientText from "@/components/gradientText"
import SectionTag from "@/components/sectionTag"
import ProjectGrid from "./works"


import SkylineImage from "@/assets/images/construction.png"

const Cases = () => {
  return (
    <div className="p-17.5 bg-white space-y-5">
      <div className="space-y-4">
        <SectionTag text="Proven Results" className="text-black" />
        <GradientText text="Here are some of our successful projects that showcase how we help our clients achieve their dream plans." />
      </div>
      <div>
        <ProjectGrid projects={[{
          image: SkylineImage,
          title: "Skyline tower",
          location: "New York",
          href: "#"
        }, {
          image: SkylineImage,
          title: "Skyline tower",
          location: "New York",
          href: "#"
        }, {
          image: SkylineImage,
          title: "Skyline tower",
          location: "New York",
          href: "#"
        }, {
          image: SkylineImage,
          title: "Skyline tower",
          location: "New York",
          href: "#"
        }]} />
      </div>
    </div>
  )
}

export default Cases
