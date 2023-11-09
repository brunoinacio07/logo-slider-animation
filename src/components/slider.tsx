"use client"

import { SizeContext } from "@/utils/size-observer"
import { useAnimationFrame } from "@/utils/use-animation-frame"
import { ReactNode, useCallback, useContext, useRef } from "react"

interface SliderContainerProps {
  initialOffsetX: number
  className?: string
  contentWidth: number
  children: ReactNode
}

export function SliderContainer({
  initialOffsetX,
  className,
  contentWidth,
  children,
}: SliderContainerProps) {
  const { innerWidth } = useContext(SizeContext)
  const refScrollX = useRef<number>(initialOffsetX)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer
      const { current: elContent } = refContent
      if (elContainer && elContent) {
        refScrollX.current += 1
        elContainer.scrollLeft = refScrollX.current
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0
          elContainer.scrollLeft = 0
        }
      }
    }, [])
  )

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className="inline-flex">
        {children}
      </div>
      <div className={enabled ? "inline-flex" : "hidden"}>{children}</div>
    </div>
  )
}

interface SliderItemProps {
  width: number
  children: ReactNode
}

export function SliderItem({ children, width }: SliderItemProps) {
  return (
    <div
      className="inline-flex justify-center items-center mx-4"
      style={{ width }}
    >
      {children}
    </div>
  )
}
