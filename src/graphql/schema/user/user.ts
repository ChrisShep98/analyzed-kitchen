import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  username!: string;

  @Field(() => String)
  password?: string;

  @Field(() => Int)
  role!: number;
}

export { User };
