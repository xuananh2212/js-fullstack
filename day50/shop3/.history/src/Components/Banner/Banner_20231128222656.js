"use client"
import { Carousel } from "antd";
import { useRef } from 'react'
export default function Banner() {
     const ref = useRef();
     return (
          <Carousel
               className={clsx(styles.carouselSlice)}
               autoplay
               dots
               pauseOnDotsHover
               pauseOnHover
               draggable
               ref={ref}
               autoplaySpeed={4500}
          >

          </Carousel>
     )
}
