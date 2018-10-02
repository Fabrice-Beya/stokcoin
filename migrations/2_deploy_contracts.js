var StokCoin = artifacts.require("StokCoin");
var StokVel = artifacts.require("StokVel");
module.exports = function(deployer) {
  deployer.deploy(StokCoin);
  deployer.deploy(StokVel);
};