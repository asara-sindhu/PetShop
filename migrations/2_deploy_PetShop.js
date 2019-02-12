var Petshop = artifacts.require("./PetShop.sol");

module.exports = function(deployer) {
  deployer.deploy(Petshop);
};
