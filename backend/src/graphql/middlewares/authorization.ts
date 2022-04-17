import { AuthChecker } from 'type-graphql';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { getTokenFromHeaders } from '../../utils/auth.utils';
import { JWT_SECRET } from '../../utils/constants.utils';
import { GraphqlContext } from '../configs';

export const authChecker: AuthChecker<GraphqlContext> = async ({ context }, roles) => {
  const { req } = context;
  const token = getTokenFromHeaders(req);
  if (!token) throw new Error("You're not logged in!");

  // eslint-disable-next-line no-undef
  const payload = jwt.verify(token, JWT_SECRET) as JwtPayload & Express.Request['user'];

  req.user = payload;

  if (roles.length === 0) return true;

  if (!roles.includes(payload.userRoleName)) return false;

  return true;
};
