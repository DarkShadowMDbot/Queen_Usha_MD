const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "d0YjBazS#C3hObySGeI858M2Dc4ev4E-6HZaDAXM9XFP8E52yixI",
  MONGODB: process.env.MONGODB || "mongodb://mongo:lCWCtIVmrseLwZPgYEqSXFDLcZUAPCAe@metro.proxy.rlwy.net:43580",
  OWNER_NUM: process.env.OWNER_NUM || "94751671388",
};
