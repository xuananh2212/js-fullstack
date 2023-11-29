import Image from 'next/image';
import { config } from '@/config/config';
import { client } from '@/config/client';
import styles from "./Gallery.module.scss";
import clsx from 'clsx';
import Link from 'next/link';
export default async function Gallery() {
     const { data } = await client.get("https://api-pages.vercel.app/api/v1/pages/1");
     const { galleryBox } = data;
     return (
          <div className={clsx(styles.gallery)}>
               <ul>
                    {
                         galleryBox.length > 0
                         &&
                         galleryBox.map(({ id, src, span, h3 }) => {
                              return <li key={id}  >
                                   <Image
                                        width={300}
                                        height={300}
                                        src={`${config.IMG_API}${src}`} alt={`${h3}`} />
                                   <div className="content">
                                        <span>{span}</span>
                                        <h3>{h3}</h3>
                                   </div>
                                   <Link>
                                        <button
                                             className={styles.btn}
                                        >
                                             Chi Tiết
                                        </button>
                                   </Link>
                              </li>
                         }

                         )

                    }

               </ul>
          </div>

     )
}
