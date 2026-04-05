
"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"
import { PlusIcon } from "lucide-react"

// ── Hook ────────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLLIElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, target, duration])

  return { count, ref }
}

export default function StatItem({
  title,
  description,
  showIcon,
  count,
  index,
  total,
  className
}: {
  title: string
  description: string
  showIcon?: boolean
  count: number
  index: number
  total: number
  className?: string
}) {
  const { count: animatedCount, ref } = useCountUp(count)

  return (
    <li
      ref={ref}
      className={`
        p-5 min-h-64 md:h-135 text-left md:text-right flex flex-col justify-center
        border-gray-200/10 space-y-5
        ${index % 2 === 0 ? "md:border-r md:border-r-gray-200/40" : ""}
        ${index < total - 1 ? "border-b border-gray-100" : ""}
        ${index < total - 2 ? "md:border-b md:border-gray-100" : "md:border-b-0"}
        ${className}
      `}
    >
      <h4
        className="text-[32px] md:text-[38px] md:justify-end text-black inline-flex gap-x-0 items-center uppercase font-medium"
        style={{ letterSpacing: "-0.04em", lineHeight: "115.5%" }}
      >
        {animatedCount}
        {showIcon && <PlusIcon />}
      </h4>
      <div className="space-y-5">
        <p className="font-dm-sans text-[24px] md:text-[30px] text-[#363636]">{title}</p>
        <p
          className="line-clamp-3 font-outfit text-left md:text-right text-[18px] md:text-[20px] font-light"
          style={{ color: "gray", lineHeight: "1.4" }}
        >
          {description}
        </p>
      </div>
    </li>
  )
}

