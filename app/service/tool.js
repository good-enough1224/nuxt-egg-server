const Service = require("egg").Service;
const nodemailer = require("nodemailer");
class ToolService extends Service {
  async sendEmail(email, title, html) {
    const sender = this.config.sender;
    const code = Math.random().toString().slice(2, 8);
    this.ctx.session.email = code;
    let transporter = nodemailer.createTransport({
      //host: "smtp.ethereal.email",
      service: "qq",
      port: 456, //邮箱端口
      secure: true, // true for 465, false for other ports
      auth: {
        user: sender, // 邮箱账号
        pass: "dwwqpteriybwbigj", //邮箱的授权码.
      },
    });
    try {
      let info = await transporter.sendMail({
        from: sender, // s发送者
        to: `${email}`, // l接收
        subject: title, // 主题
        html,
      });
      if (info.response.indexOf("OK") > -1) {
        console.log("发送成功");
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ToolService;
