import Image from 'next/image';
export default async function Gallery({ id, src, span, h3 }) {
     const dataSrc = await client.get(`${config.IMG_API}/${src}`)
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
