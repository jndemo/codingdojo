//simple node app
const status = "online";

function verifyAppIsOnline(){
  return status == "online" ? true : false;
}

module.exports = {
  verifyAppIsOnline,
  status
}
