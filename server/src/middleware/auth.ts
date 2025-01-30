// JWT MIDDLEWARE CODE THAT PROTECTS ROUTES AND VERIFIES JWT   <-- AJ
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { verifyToken } from '../utils/jwt.js';  // <-- corrected pathing issue here:

// Extend the Request interface to include the user property
declare module 'express-serve-static-core' {
    interface Request {
      user?: any;
    }
  }


  export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Access denied' });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = decoded;
  };