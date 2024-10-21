import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "User does not exist." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect credentials." });
    }
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET);
    res.json({ token });
  },

  register: async (req, res) => {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ message: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    res.sendStatus(201);
  },
};

export default authController;
