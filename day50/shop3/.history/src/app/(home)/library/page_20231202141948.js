import Gallery from "../../../Components/Gallery/Gallery";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function page() {

     const session = await getServerSession(options);

     if (!session) {
          redirect("/api/auth/signin?callbackUrl=/ligrary");
     }

     return (
          <div className="library" style={{ paddingTop: 100 }}>
               <Gallery id={2} />
          </div>
     )
}
