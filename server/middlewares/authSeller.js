import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res.status(403).json({ success: false, message: "Not Authorized" });
  }

  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.SECRET_KEY);
    if (tokenDecode.email === process.env.SELLER_MAIL) {
      next();
    } else {
      return res.json({ success: false, message: "Not Authorized" });
    }
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authSeller;
