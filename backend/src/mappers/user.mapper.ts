import { User } from "../graphql/models";
import { generateToken } from "../utils/token.utils";

export const userMapper = (user: User) => ({
  ...user,
  token: generateToken(user),
});
