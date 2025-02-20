import { PrismaClient } from "@prisma/client";
import { Arg, Query, Resolver } from "type-graphql";
import { UserResponse } from "./user/getUserResponse";
import { User } from "./user/user";

const prisma = new PrismaClient();

@Resolver(UserResponse)
class GetUserByUsernameResolver {
  @Query(() => UserResponse)
  async getUser(@Arg("username", () => String) username: string): Promise<UserResponse> {
    const prismaUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!prismaUser) return { user: undefined };
    const user: User = {
      id: prismaUser.id,
      email: prismaUser.email,
      username: prismaUser.username,
      password: prismaUser.password,
      role: Number(prismaUser.role), // Convert role to number
    };
    return { user };
  }
}

export { GetUserByUsernameResolver };
