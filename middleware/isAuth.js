import { admin } from "../config/firebase.js";

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];
  console.table({ token });
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    console.log(decodedToken);
    next();
  } catch (error) {
    console.error("isAuthenticated :: error", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default isAuthenticated;
