import Image from 'next/image';
import { config } from '@/config/config';
export default async function GalleryItems() {
     const { data } = await client.get("https://api-pages.vercel.app/api/v1/pages/1");
     const { galleryBox } = data;
     console.log(galleryBox);
     console.log(src, `${config.IMG_API}${src}`);
     return (
          <li  >
               <Image
                    width={300}
                    height={300}
                    src={`${config.IMG_API}${src}`} alt={`${h3}`} />
               <div className="content">
                    <span>{span}</span>
                    <h3>{h3}</h3>
               </div>
          </li>
     )
}
