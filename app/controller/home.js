"use strict";

const BaseController = require("./base");

class HomeController extends BaseController {
  async index() {
    this.success({
      name: "Sharlock",
      cooperate: "Watson",
    });
  }
}

module.exports = HomeController;
