import { auth, signOut } from "@/app/auth";
import Image from "next/image";

export default async function Dashboard() {
  const session = await auth();

  const sessionDate = {
    name: session?.user?.name,
    picture: session?.user?.image,
  };

  return (
    <div>
      <h1>Hello {sessionDate.name}!</h1>
      <Image
        src={sessionDate.picture!}
        alt="Google picture"
        height={96}
        width={96}
        quality={100}
        className="rounded-full"
      />
      <button
        onClick={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        Sign out
      </button>
    </div>
  );
}
