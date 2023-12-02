import FormPay from "./formpay"

export default async function page() {
     const session = await getServerSession(options);

     if (!session) {
          redirect("/api/auth/signin?callbackUrl=/ligrary");
     }
     return (
          <div>
               <FormPay />
          </div>
     )
}
