"use client"

import Image from "next/image"
import { SliderContainer, SliderItem } from "./slider"

export function ClientLogos() {
  return (
    <SliderContainer contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={170}>
        <Image
          src="/assets/brf.svg"
          alt="brf"
          width={170}
          height={50}
          className="object-contain"
        />
      </SliderItem>
      <SliderItem width={200}>
        <Image
          src="/assets/hospital-mackenzie.svg"
          alt="hospital-mackenzie"
          width={200}
          height={50}
          className="object-contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/laborclin.svg"
          alt="laborclin"
          width={150}
          height={50}
          className="object-contain"
        />
      </SliderItem>
      <SliderItem width={200}>
        <Image
          src="/assets/lojas-americanas.svg"
          alt="lojas-americanas"
          width={200}
          height={50}
          className="object-contain"
        />
      </SliderItem>
      <SliderItem width={80}>
        <Image
          src="/assets/renault.svg"
          alt="renault"
          width={80}
          height={50}
          className="object-contain"
        />
      </SliderItem>
      <SliderItem width={100}>
        <Image
          src="/assets/volkswagen.svg"
          alt="volkswagen"
          width={100}
          height={50}
          className="object-contain py-2"
        />
      </SliderItem>
    </SliderContainer>
  )
}
