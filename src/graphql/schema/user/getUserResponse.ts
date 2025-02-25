import { Field, ObjectType } from "type-graphql";
import { User } from "@/graphql/schema/user/user";

// TODO: handle errors

@ObjectType()
class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;
}

export { UserResponse };
