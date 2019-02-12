pragma solidity ^0.5.0;

contract PetShop {
    struct Pets{
        string petName;
        string petType;
        uint petAge;
        string status;
        // string owner;
        address owner;
        uint[] visitedTimeStamp;
        
    }
    mapping(uint => Pets)Pet;
    uint[] PetIds;
    uint[] adoptedPetIds;

    // This function is to add pet to the list of pets with status as ForAdoption
    function addPet(uint pId, string memory _petType,string memory _petName, uint _petAge) public {
        Pet[pId].petName = _petName;
        Pet[pId].petType = _petType;
        Pet[pId].petAge = _petAge;
        Pet[pId].status = "ForAdoption";
        PetIds.push(pId);
    }

    // This function is to change the status of pet to adopted along with owner 
    function adopt(uint pId) public {
        // Pet[pId].owner = _owner;
        Pet[pId].owner = msg.sender;
        Pet[pId].status = "Adopted";
    }

    function adoptedPets() internal view returns(uint[] memory) {
        uint[] memory adoptedPetId = new uint[](PetIds.length);
        uint count = 0;
        for(uint i = 0; i<PetIds.length; i++){
            if(keccak256(bytes(Pet[PetIds[i]].status)) == keccak256(bytes("ForAdoption"))){
                adoptedPetId[count] = PetIds[i];
                count++;
            }
        }
        return adoptedPetId;
    }
    //This function returns the array of petIds whose status is For Adoption
    function getPetsForAdoption()public view returns(uint[] memory) {
        return adoptedPets();
    }

    //This function returns the records of all visits of a pet to a veterinary doctor 
    function recordVetVisit(uint pId, uint unixTimestampNumber) public {
        unixTimestampNumber = now;
        Pet[pId].visitedTimeStamp.push(unixTimestampNumber); 
    }

    // This function is to return the first vet visit of a pet based on petId
    function getFirstVetVisit(uint pId)public view returns (uint) {
        return Pet[pId].visitedTimeStamp[0];
    }

    // This function get all the visits of a pet to the vet 
    function getVetVisit(uint pId)public view returns (uint[] memory){
        return Pet[pId].visitedTimeStamp;
        
    }

    // This function is to return the last vet visit of a pet based on petId
    function getLastVetVisit(uint pId)public view returns (uint){
        return Pet[pId].visitedTimeStamp[Pet[pId].visitedTimeStamp.length-1];
        
    }
}
