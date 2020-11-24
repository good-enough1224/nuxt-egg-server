"use strict";

const BaseController = require("./base");

class UserController extends BaseController {
  async userinfo() {
    this.success({
      name: "Sharlock",
      cooperate: "Watson",
    });
  }
}

module.exports = UserController;
