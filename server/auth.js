import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 10;

// When a login route is created, use this middleware on that route
export const hasPasswordMiddleware = (req, res, next) => {
  // get password from request body
  const { password } = req.body;
  // optional password length check
  if (password && password.length > 5) {
    // hash password using bcrypt
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(500).json({ err: "Error hashing password" });
      }
      // set password to hashed password
      req.body.password = hash;
      //continue with the post request
      next();
    });
  } else {
    next();
  }
};

export const validateToken = (token, secretKey) => {
  try {
    // verify token using jwt
    const decoded = jwt.verify(token, secretKey);
    return { valid: true, decoded };
  } catch (err) {
    return { valid: false, decoded: null };
  }
};

export const validatePassword = (username, password) => {
  // compares password to hashed password using bcrypt
  return bcrypt.compare(password, username.password);
};
