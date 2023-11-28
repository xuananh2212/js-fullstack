"use client"
import { Carousel } from "antd";
import { useRef } from 'react';
import styles from './Banner.module.scss';
import clsx from "clsx";
export default function Banner() {
     const ref = useRef();
     return (
          <Carousel
               className={clsx(styles.banner)}
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
                         loop
                         autoplay
                         muted
                         className={styles.video}

                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4">

                    </video>
               </div>
               <div>
                    <video
                         loop
                         autoplay
                         muted
                         className={styles.video}
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4">

                    </video>
               </div>
               <div>
                    <video
                         loop
                         autoplay
                         muted
                         className={styles.video}
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4">

                    </video>
               </div>


          </Carousel>
     )
}
