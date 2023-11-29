import Image from 'next/image';
import { client } from '@/config/client';
import { config } from '@/config/config';
export default async function GalleryItems({ id, src, span, h3 }) {
     const dataSrc = await client.get(`${config.IMG_API}/${src}`)
     console.log(dataSrc);
     return (
          <li key={id} >
               <Image src={dataSrc} alt={`${h3}`} />
               <div className="content">
                    <span>{span}</span>
                    <h3>{h3}</h3>
               </div>
          </li>
     )
}
