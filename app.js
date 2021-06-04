//simple node app
const status = "offline";

function verifyAppIsOnline(){
  return status == "online" ? true : false;
}

module.exports = {
  verifyAppIsOnline,
  status
}
