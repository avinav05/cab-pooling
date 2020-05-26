export const USER_EXISTS_QUERY = `
query($email: String!) {
  userExists(email: $email)
}
`;