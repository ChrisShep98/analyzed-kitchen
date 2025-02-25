import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "@/graphql/resolvers/register";
import { GetUserByUsernameResolver } from "@/graphql/schema/getUser";

const schema = await buildSchema({
  resolvers: [RegisterResolver, GetUserByUsernameResolver],
  validate: false,
});

const server = new ApolloServer({ schema });

export type MyContext = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res): Promise<MyContext> => ({
    req,
    res,
  }),
});

export { handler as GET, handler as POST }; // works with Next.js API routes
