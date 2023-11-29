import Image from 'next/image';
import { config } from '@/config/config';
export default function GalleryItems({ id, src, span, h3 }) {
     console.log(src);
     return (
          <li  >
               <Image
                    width={300}
                    src={`${config.IMG_API}/${src}`} alt={`${h3}`} />
               <div className="content">
                    <span>{span}</span>
                    <h3>{h3}</h3>
               </div>
          </li>
     )
}
