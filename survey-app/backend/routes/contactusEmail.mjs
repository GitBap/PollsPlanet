import express from "express";
import sendpulse from "sendpulse-api";

const API_USER_ID = "c0d97dfd87b161f5364d3dc7bc263770";
const API_SECRET = "82a894199bbde2dac2319e104b963f85";
const TOKEN_STORAGE = "/tmp/";

const emailRouter = express.Router();

emailRouter.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {
    if (token) {
      console.log("Successfully authorized in SendPulse");
      const from = {
        name: "Your Company Name",
        email: "pollsplanet1@gmail.com",
      };
      const to = [
        {
          email: "pollsplanet1@gmail.com",
        },
      ];
      const subject = `Contact from ${name} (${email})`;
      const body = message;
      sendpulse.smtpSendMail(
        (response) => {
          console.log(response);
          res.send(response);
        },
        from,
        to,
        subject,
        body
      );
    } else {
      console.error("Failed to authorize in SendPulse");
      res.status(500).send("Failed to send email");
    }
  });
});

export { emailRouter as contactusEmail };
