"use strict";

const BaseController = require("./base");
class UserController extends BaseController {
  async userinfo() {
    this.success({
      name: "Sharlock",
      cooperate: "Watson",
    });
  }
  
  async sendCode(){
    const email = this.ctx.query.email
    const title = '邮箱测试验证码'
    const html =`<b>Hello world?</b>"`
    const res = await this.service.tool.sendEmail(email,title,html)
    if(res){
      this.success('发送成功');
    }
  }
}

module.exports = UserController;
