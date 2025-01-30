
// Created JWT Utility Functions Here -AJ
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET as string;

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    if (!SECRET_KEY) {
      throw new Error('JWT_SECRET is not defined');
    }
    const decoded = jwt.verify(token, SECRET_KEY);
    if (typeof decoded === 'object' && decoded !== null) {
      return decoded as JwtPayload;
    }
    return null;

  } catch (error) {
    return null;
  }
};