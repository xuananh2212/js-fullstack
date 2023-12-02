import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function page() {
  const session = await getServerSession(options);
  console.log(session?.user)
  return (
    <div>
      <Banner />
      <Gallery id={1} />
    </div>
  )
}
