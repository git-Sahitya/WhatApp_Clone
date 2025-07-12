const otpGenerate = require("../utils/otpGenerater");
const User = require("../models/user.model");
const response = require("../utils/responseHandler");

// Step - 1  -> sendOTP

const sendOtp = async (req, res) => {
  const { phoneNumber, phoneSuffix, email } = req.body;
  const otp = otpGenerate();
  const expiry = new Date(Date.now() + 5 * 60 * 1000);
  let user;
  try {
    if (email) {
      user = await User.findOne({ email });

      if (!email) {
        user = new User({ email });
      }
      user.emailOtp = otp;
      user.expiry = expiry;
      await user.save();
      return response(res, 200, "OTP send to your email", { email });
    }
    if (!phoneNumber || !phoneSuffix) {
      return response(
        res,
        400,
        "Phone_Number and Phone_Suffix must be required!!"
      );
    }
    const fullPhoneNumber = `${phoneSuffix}${phoneNumber}`;
    user = await User.findOne({ phoneNumber });
    if (!user) {
      user = await new User({ phoneNumber, phoneSuffix });
    }
    await user.save();

    return response(res, 200, "OTP send successfully", user);
  } catch (error) {
    console.error(error);
    return response(res, 500, "Internal server error");
  }
};
