"use client"
import { Carousel } from "antd";
import { useRef } from 'react';
import styles from './Banner.module.scss';
import clsx from "clsx";
import { CldVideoPlayer } from 'next-cloudinary'
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
                    <CldVideoPlayer

                         autoplay

                         className={styles.video}
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4">
                    </CldVideoPlayer>
               </div>
               <div>
                    <CldVideoPlayer

                         autoplay

                         className={styles.video}
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4">
                    </CldVideoPlayer>
               </div>
               <div>
                    <CldVideoPlayer

                         autoplay

                         className={styles.video}
                         src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4">

                    </CldVideoPlayer>
               </div>


          </Carousel>
     )
}
