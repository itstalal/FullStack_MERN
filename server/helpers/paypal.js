const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASHMdqw0mpuwzJ2OgIoa1977jNNiHPl7vtbpZmUbOy5obCV8z6yaDYw1gnP-r4--OXFf9xm9w1aujbSI",
  client_secret: "EG65zIXrjibpA2vIPtEt6Ob31uheFgyG9FFE0El1ICoVEiEprgKqh9oPg1fmeId-WWzLgcHCdBK_zwjr",
});

module.exports = paypal;
