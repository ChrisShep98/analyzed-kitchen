import { Box, Button, Stack } from "@mui/material";
import { signIn } from "@/app/auth";
import Image from "next/image";
import GoogleIcon from "images/google-icon.svg";

export default function LoginForm() {
  return (
    <Box
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      position={"absolute"}
      p={6}
      borderRadius={"30px"}
      sx={{ backgroundColor: "white" }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Image src={GoogleIcon} alt="Google Icon" width={50} height={50} />
        <form
          action={async () => {
            "use server"; // signIn is a server function so we need to specify
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <Button type="submit">Signin with Google</Button>
        </form>
      </Stack>
    </Box>
  );
}
