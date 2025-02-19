import { PsqlError } from "../../error/psqlError";
import { Field, ObjectType, ID } from "type-graphql";
import { User } from "../user/user";

@ObjectType()
class RegisterResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [PsqlError], { nullable: true })
  errors?: PsqlError[];
}

export { RegisterResponse };
