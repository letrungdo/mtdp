import mail from "@sendgrid/mail";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

mail.setApiKey(publicRuntimeConfig.sendGridApiKey);

const contact = async (req, res) => {
  const body = req.body;
  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
  const data = {
    to: "letrdo@gmail.com",
    from: "dolt@runsystem.net",
    subject: `[${body.email}] - ${body.subject}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
  await mail.send(data);

  res.status(200).json({
    result: "OK",
  });
};

export default contact;
