import jwt from "jsonwebtoken";

// * Login Seller : /api/seller/login

export const sellerLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_MAIL
    ) {
      const token = jwt.sign({ email }, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });

      res.cookie("sellerToken", token, {
        httpOnly: true, // prevent js to access
        secure: process.env.NODE_ENV === "production", //use secure cookies in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", //csrf protecion
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.json({ success: true, message: "Logged In" });
    } else {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error.message);
    return res.json({ success: false, message: error.message });
  }
};

//  * Seller isAuth : /api/seller/is-auth

//is-auth
export const isSellerAuth = async (req, res) => {
  try {
    return res.json({ success: true });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

// * logout : /api/seller/logout

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
