const Web3 = require('web3');
const web3_const = new Web3('http://localhost:7545');
const jsonFile = require('jsonfile');
const jsonFilePath = './../build/contracts/PetShop.json'
const abi_json = jsonFile.readFileSync(jsonFilePath).abi
const myContract = new web3_const.eth.Contract(abi_json, '0x4d19B0af63c889F8E5f27f6C065bcDb7B7C552Ab');

async function addPet(req,res){
    try{
        await myContract.methods.addPet(req.body.petid,req.body.pettype,req.body.petname,req.body.petage).send({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96', gas:'900000', gasPrice:'1'})
        // console.log(res);
        res.status(200).send(req.body);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Unable to add pet to the petlist ');
    }
}
async function adopt(req, res){
    try{
        await myContract.methods.adopt(req.params.petid).send({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96'})
        // console.log(res);
        res.status(200).send(req.body);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Unable to get the list of adopted pets');
    }
}
async function getPetsForAdoption(req, res){
    try{
        await myContract.methods.getPetsForAdoption().call({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96'})
        // console.log(res);
        res.status(200).send(req.body);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Unable to get the list of pets available for adoption');
    }
}

async function recordVetVisit(req,res){
    try{
        await myContract.methods.recordVetVisit(req.body.petid,req.body.unixTimestampNumber).send({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96'})
        // console.log(res);
        res.status(200).send(req.body);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Unable to get the list of vet visits');
    }
}
async function getFirstVetVisit(req,res){
    try{
        let result = await myContract.methods.getFirstVetVisit(req.body.petid).call({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96'})
        console.log(res);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error)
            res.status(500).send('Unable to get the time stamp of first vet visit');
    }
}
async function getVetVisit(req,res){
    try{
        let result = await myContract.methods.getVetVisit(req.params.petid).call({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96'})
        // console.log(res);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Unable to get the list of time stamps for vet visits');
    }
}
async function getLastVetVisit(req,res){
    try{
        let result = await myContract.methods.getLastVetVisit(req.body.petid).call({from: '0x121c57B9d717b809eD51fec2C4621C678cb4ad96'})
        // console.log(res);
        res.status(200).send(result);
    }
    catch(error){
        console.log(error)
        res.status(500).send('Unable to get the time stamp of last vet visit');
    }
}

module.exports={
    addPet,
    adopt,
    recordVetVisit,
    getFirstVetVisit,
    getVetVisit,
    getLastVetVisit,
    getPetsForAdoption
}
