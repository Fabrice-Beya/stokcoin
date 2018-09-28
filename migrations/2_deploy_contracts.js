var StokCoin = artifacts.require("StokCoin");
module.exports = function(deployer) {
  deployer.deploy(StokCoin);
};