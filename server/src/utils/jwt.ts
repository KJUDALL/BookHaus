// Created JWT Utility Functions Here -AJ
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (typeof decoded === 'object' && decoded !== null) {
      return decoded as JwtPayload;
    }
    return null;
  } catch (error) {
    return null;
  }
};