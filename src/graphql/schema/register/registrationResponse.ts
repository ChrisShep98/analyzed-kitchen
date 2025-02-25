import { PsqlError } from "@/graphql/error/psqlError";
import { Field, ObjectType } from "type-graphql";
import { User } from "@/graphql/schema/user/user";

@ObjectType()
class RegisterResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [PsqlError], { nullable: true })
  errors?: PsqlError[];
}

export { RegisterResponse };
