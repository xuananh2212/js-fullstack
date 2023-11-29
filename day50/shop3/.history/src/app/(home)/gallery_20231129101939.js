import { client } from '@/config/client';
import { config } from '@/config/config';
import { Row, Col } from 'antd';
import Image from 'next/image';
export default async function Gallery() {
     const { data } = await client.get("https://api-pages.vercel.app/api/v1/pages/1");
     const { galleryBox } = data;
     console.log(galleryBox);
     return (
          <div>
               <ul>
                    {
                         galleryBox.length > 0 && galleryBox.map(({ id, src, span, h3 }) => {
                              const dataSrc = client.get(`${config.IMG_API}/${src}`)
                                   < li key = { id } >
                                        <Image src={src} />

                              </li>
                         })

                    }

          </ul>
          </div >
     )
}
