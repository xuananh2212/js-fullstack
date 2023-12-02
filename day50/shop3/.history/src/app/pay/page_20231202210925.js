import FormPay from "./formpay";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function page() {
     const session = await getServerSession(options);
     if (!session) {
          redirect("/api/auth/signin?callbackUrl=/pay");
     }
     return (
          <div>
               <FormPay />
          </div>
     )
}
