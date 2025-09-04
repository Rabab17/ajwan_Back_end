// src/api/message-ajwan/content-types/message-ajwan/lifecycles.js
const emailService = require("../../../api/message-ajwan/services/email");
module.exports = {
  async afterCreate(event) {
    const { result } = event;

    await emailService.sendEmail(
      "YOUR_EMAIL@gmail.com",
      "New Message from Ajwan",
      `Message content: ${result.content}`
    );
  },
};

