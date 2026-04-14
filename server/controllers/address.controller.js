import Address from "../models/address.js";

//  * Add Address: /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { address } = req.body;
    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address Added" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

//  * Get Address: /api/address/get
export const getAddress = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};
