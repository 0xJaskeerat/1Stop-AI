import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <p>Unprotected page</p>
      <Link href={"/sign-in"}>
        <Button>Login</Button>
      </Link>
      <Link href={"/sign-up"}>
        <Button>Sign Up</Button>
      </Link>
     
    </>
  )
}
