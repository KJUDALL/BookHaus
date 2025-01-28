//  Created user authentication routes for user registration and Login to handle JWT generation  -AJ
// filepath: server/src/routes/auth.ts
import express from 'express';
import User from '../models/User';
import { generateToken } from '../utils/jwt';
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = generateToken({ id: user._id });
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = generateToken({ id: user._id });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
});

export default router;