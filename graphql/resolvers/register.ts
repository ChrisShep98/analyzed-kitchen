import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { Arg, Mutation, Resolver } from "type-graphql";
import { RegisterResponse } from "../schema/register/registrationResponse";
import { UserInput } from "../schema/user/userRegistrationInput";
import { User } from "../schema/user/user";

const prisma = new PrismaClient();

@Resolver(RegisterResponse)
class RegisterResolver {
  @Mutation(() => RegisterResponse)
  async register(
    @Arg("user", () => UserInput) user: UserInput
  ): Promise<RegisterResponse> {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          username: user.username,
          password: hashedPassword,
        },
      });
      return {
        user: { email: newUser.email, username: newUser.username, id: "1", role: 1 },
      };
    } catch (error) {
      console.log(error);
      return {
        errors: [
          {
            field: "registration",
            message: "An error occured during registration",
          },
        ],
      };
    }
  }
}

export { RegisterResolver };
