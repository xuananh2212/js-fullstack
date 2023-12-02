import FormPay from "./formpay"

export default async function page() {
     const session = await getServerSession(options);
     import { options } from "../../api/auth/[...nextauth]/options";
     import { getServerSession } from "next-auth/next";
     import { redirect } from "next/navigation";
     if (!session) {
          redirect("/api/auth/signin?callbackUrl=/ligrary");
     }
     return (
          <div>
               <FormPay />
          </div>
     )
}
