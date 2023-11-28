"use client"
import { Carousel } from "antd";
import { useRef } from 'react';
import styles from './Banner.module.scss';
import clsx from "clsx";
import Link from "next/link";
export default function Banner() {
     const ref = useRef();
     return (
          <div className={clsx(styles.banner)}>
               <div className={clsx(styles.content)}>
                    <h3>Mọi chuyến đi đều đáng giá</h3>
                    <p>Khám phá các vùng đất mới cùng chúng tôi</p>
                    <p>Những chuyến đi đang chờ đợi bạn</p>
                    <Link href="#packages" class="btn">Khám phá ngay</Link>
               </div>
               <Carousel
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
                              autoPlay
                              muted
                              className={styles.video}
                              src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4">
                         </video>
                    </div>
                    <div>
                         <video
                              loop
                              autoPlay
                              muted
                              className={styles.video}
                              src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4">
                         </video>
                    </div>
                    <div>
                         <video
                              loop
                              autoPlay
                              muted
                              className={styles.video}
                              src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4">

                         </video>
                    </div>


               </Carousel>
          </div>
     )
}
