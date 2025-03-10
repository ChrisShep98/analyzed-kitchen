import { signIn } from "@/app/auth";
import Image from "next/image";
import GoogleIcon from "images/google-icon.svg";
import { Button } from "./ui/button";

export default function LoginForm() {
  return (
    <div className="p-5 absolute bg-white rounded-2xl">
      <div className="flex flex-row items-center gap-2">
        <Image src={GoogleIcon} alt="Google Icon" width={50} height={50} />
        <form
          action={async () => {
            "use server"; // signIn is a server function so we need to specify
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <Button variant={"outline"} type="submit">
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
