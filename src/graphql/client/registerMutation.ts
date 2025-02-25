import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation($user: UserInput!) {
    register(user: $user) {
      user {
        id
        username
        email
      }
    }
  }
`;
