const PetShop = artifacts.require('PetShop');
var assert = require('chai').assert;

contract('Testing the PetShop methods', () => {
    describe('deploy the petshop contract', () => {
        it('catch a PetShop instance', async () => {
            let instance = await PetShop.new()
            petShop = instance;
        });
    });
    describe('it describes adding a pet to the petshop', () => {
        it('adding a pet', async () => {
            let res = await petShop.addPet(1, "dog","honey",4)
            assert.notEqual(res,"");
            
        });
    });
    describe('it describe the adoption of pets from petshop', () => {
        it('adopted pets',async () => {
            let res = await petShop.adopt(1)
            assert.notEqual(res,"");

        });
    });
    describe('it describe the visits of pets to the vet', () => {
        it('number of visits of a pet to the vet',async () => {
            let res = await petShop.getVetVisit(1)
            console.log(res);
            assert.equal(res,"");

        });
    });
})