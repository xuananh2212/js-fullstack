import Banner from "@/Components/Banner/Banner";
import Gallery from "@/Components/Gallery/Gallery";

export default function page() {
  const session = await getServerSession(options);
  return (
    <div>
      <Banner />
      <Gallery id={1} />
    </div>
  )
}
