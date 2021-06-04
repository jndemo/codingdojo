const {status, verifyAppIsOnline} = require("./app.js");

test("Checks if app is online",() => {
  expect(verifyAppIsOnline()).toBe(true);
})
