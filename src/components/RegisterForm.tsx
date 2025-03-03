"use client";
import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { REGISTER_MUTATION } from "@/graphql/client/registerMutation";

const RegisterForm = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && username && password) {
      await registerMutation({
        variables: { user: { email, username, password } },
      });
    }
    console.log(data, "@@@@@");
  };

  if (loading) return <div>loading</div>;

  return (
    <Box
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      position={"absolute"}
      sx={{ backgroundColor: "white" }}
      mx={"auto"}
      width={"20rem"}
      p={6}
      borderRadius={"30px"}
      mb={1}
      mt={4}
    >
      <Stack spacing={2}>
        <Typography variant="h3" color={"primary.main"} fontWeight={"600"}>
          Sign up
        </Typography>
        <Typography color={"#1c203d"}>Welcome ! Sign up below</Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 15 }}
        >
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            size="small"
            name="password"
            label="Username"
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            size="small"
            name="email"
            label="Email"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="small"
            name="password"
            label="Password"
          />
          <Button typeof="submit" variant="outlined" type="submit">
            Sign up
          </Button>
        </form>
        {error && <Typography color={"red"}>{error.message}</Typography>}
        <MuiLink href={"/login"}>
          <Typography color={"#1c203d"}>Already have an account? Login here</Typography>
        </MuiLink>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
