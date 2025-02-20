import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "../user/user";

// TODO: handle errors

@ObjectType()
class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}

export { UserResponse };
