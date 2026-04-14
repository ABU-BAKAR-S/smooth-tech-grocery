import User from "../models/user.js";

//  * Update User CartData : /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { cartItems } = req.body;
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
