import Gallery from '@/Components/Gallery/Gallery';
export default function page({ searchParams }) {
     const { q } = searchParams;
     if (q) {
          return (
               <div>
                    <Gallery id={q} />
               </div>
          )

     }
     return null;

}
