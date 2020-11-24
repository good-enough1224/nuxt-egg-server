const Controller = require("egg").Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 0,
      msg: "成功",
      data: data,
    };
  }
}

module.exports = BaseController;
