import { client } from '@/config/client';
export default async function Gallery() {
     const { data } = await client.get("https://api-pages.vercel.app/api/v1/pages/1");
     const { galleryBox } = data;
     console.log(data);
     console.log(galleryBox, data.galleryBox);
     return (
          <div>

          </div>
     )
}
