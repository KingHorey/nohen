"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

interface Project {
  image: StaticImageData
  title: string
  location: string
  href?: string
  highlight?: boolean // gold label bar
}

interface ProjectGridProps {
  projects: [Project, Project, Project, Project] // exactly 4
}

const ProjectItem = ({
  project,
  index,
}: {
  project: Project
  index: number
}) => {

  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden group">
        <Image
          src={project.image}
          alt={`${project.title} ${project.location}`}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <Link
        href={project.href ?? "#"}
        className={`flex items-center justify-between px-4 py-4 group transition-colors duration-300 ${project.highlight
          ? "bg-[#EFBF04] hover:bg-[#d9aa00]"
          : "bg-white hover:bg-gray-50 border-b border-black/10"
          }`}
      >
        <div className="flex items-center gap-3">
          <ArrowRightIcon
            size={15}
            strokeWidth={2}
            className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${project.highlight ? "text-black" : "text-black"
              }`}
          />
          <span
            className="text-[11px] tracking-[0.12em] font-semibold text-black uppercase"
            style={{ fontFamily: "'Barlow Condensed', 'DM Sans', sans-serif" }}
          >
            {project.title}&nbsp;&nbsp;{project.location}
          </span>
        </div>
        {!project.highlight && (
          <ArrowRightIcon
            size={15}
            strokeWidth={2}
            className="text-black shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
        {project.highlight && (
          <div className="h-[1px] w-16 bg-black/30" />
        )}
      </Link>
    </motion.div>
  )
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="w-full bg-[#FAFAF7]">
      {/* Row 1 — left wider, right narrower */}
      <div className="grid grid-cols-[3fr_2fr] gap-6">
        <ProjectItem project={projects[0]} index={0} />
        <ProjectItem project={projects[1]} index={1} />
      </div>

      {/* Row 2 — left narrower, right wider */}
      <div className="grid grid-cols-[2fr_3fr] gap-6">
        <ProjectItem project={projects[2]} index={2} />
        <ProjectItem project={projects[3]} index={3} />
      </div>
    </section>
  )
}
