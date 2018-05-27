"use strict";

const User = use("App/Models/User");
const Hash = use("Hash");

class AuthController {
  async login({ request, auth, response }) {
    const loginInfo = request.only(["email", "password"]);
    const token = await auth.attempt(loginInfo.email, loginInfo.password);
    return response.status(200).json(token);
  }

  async register({ request, response }) {
    const hashedPassword = await Hash.make(request.body.password);
    const verifyPassword = request.body.verifyPassword;
    const passwordsMatch = await Hash.verify(verifyPassword, hashedPassword);

    if (passwordsMatch) {
      let user = new User();
      user.email = request.body.email;
      user.password = request.body.password;

      await user.save();
      return response.status(201).json({ user: user });
    }

    return response.status(400).json({
      errors: [
        {
          status: 400,
          title: "Invalid user registration",
          detail: "Passwords do not match"
        }
      ]
    });
  }
}

module.exports = AuthController;
