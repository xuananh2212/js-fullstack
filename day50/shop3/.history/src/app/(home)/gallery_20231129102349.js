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
                              const dataSrc = await client.get(`${config.IMG_API}/${src}`)
                              return <li key={id} >
                                   <Image src={dataSrc} alt={`${h3}`} />
                                   <div className="content">
                                        <span>{span}</span>
                                        <h3>{h3}</h3>
                                   </div>
                              </li>
                         })

                    }

               </ul>
          </div >
     )
}
