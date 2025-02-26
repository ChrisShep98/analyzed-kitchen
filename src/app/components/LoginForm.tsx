import { signIn } from "@/app/auth";
import Image from "next/image";
import GoogleIcon from "images/google-icon.svg";

export default function LoginForm() {
  return (
    <div
      style={{
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        position: "absolute",
        padding: 24,
        borderRadius: "30px",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Image src={GoogleIcon} alt="Google Icon" width={50} height={50} />
        <form
          action={async () => {
            "use server"; // signIn is a server function so we need to specify
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button type="submit">Signin with Google</button>
        </form>
      </div>
    </div>
  );
}
