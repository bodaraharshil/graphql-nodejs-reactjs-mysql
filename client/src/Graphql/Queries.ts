import { gql } from "@apollo/client";

export const GETALLUSER = gql`
  query {
    getAlluser {
      name
      username
    }
  }
`;
