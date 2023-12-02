import FormPay from "./formpay"
const session = await getServerSession(options);

if (!session) {
     redirect("/api/auth/signin?callbackUrl=/ligrary");
}
export default function page() {
     return (
          <div>
               <FormPay />
          </div>
     )
}
