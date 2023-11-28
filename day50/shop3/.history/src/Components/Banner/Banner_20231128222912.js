"use client"
import { Carousel } from "antd";
import { useRef } from 'react';
import styles from './Banner.module.scss'
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
               <div>
                    <video
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4">

                    </video>
               </div>
               <div>
                    <video
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4">

                    </video>
               </div>
               <div>
                    <video
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4">

                    </video>
               </div>

          </Carousel>
     )
}
