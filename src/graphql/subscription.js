import gql from "graphql-tag";
export const GET_CHAT_DETAILS = gql`
  subscription getChatDetails($link: String) {
    getChatDetails(link: $link) {
      email
      text
    }
  }
`;
