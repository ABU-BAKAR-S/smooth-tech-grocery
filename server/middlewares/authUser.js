import jwt from "jsonwebtoken";

/*
const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.SECRET_KEY);
    if (tokenDecode.id) {
      // req.body.userId = tokenDecode.id;
      req.user = { id: tokenDecode.id };
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

*/

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.SECRET_KEY);

    if (tokenDecode.id) {
      req.user = { id: tokenDecode.id }; // ✅ better
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }

    next();
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
