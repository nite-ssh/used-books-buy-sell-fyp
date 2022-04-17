import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './constants.utils';
import { User } from '../graphql/models/User';

export const generateToken = ({ id, username, userRoleName, email }: User): string =>
  jwt.sign({ id, email, username, userRoleName }, JWT_SECRET, {
    expiresIn: '60d',
  });
