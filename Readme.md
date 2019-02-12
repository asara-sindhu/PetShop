	1. Install truffle globally
		sudo npm install -g truffle.

	2. Install ganache from https://truffleframework.com/ganache
		- Once you get the image of ganache, go to properties of the file, in permissions tab check "Allow executing file as program".
		- After installation go to settings on the ganache application and set HOSTNAME as "127.0.0.1 - lo", PORT NUMBER as "7545", NETWORK ID as "5777".
		- Select save and restart.

	3. Compile, migrate and get the contract address
		- Navigate to the project folder, execute "truffle compile"
		- After successful compile, truffle generates a build folder.
		- Execute "truffle migrate --reset".
		- After migration is successful, contract address will be generated in /build/PetShop.json file
		- Copy the contract address and place it in api/petshopController.js in return new web_const.eth.Contract(abi_json,'/* contract address */').
		
	4. In terminal go to the api folder and run 'node app'.

	5. Use the postman collection from the following link to use the API
    https://www.getpostman.com/collections/68dab0cd44a93a3adb25

	6. To use API from postman
		- Add a pet to the petshop using http://localhost:3090/pets - POST request with body similar to { "petid" : "1" , "pettype" : "dog" , "petname" : "puppet","petage" : "7"}
		- Change the status of a pet to adopted using http://localhost:3090/pets/:petid/adoption - PUT request with body similar to { "petid" : "1"}
		- Get the list of pets whose status is For Adoption  http://localhost:3090/pets/foradoption - GET request 
		-Get the number of vet visits of a pet using http://localhost:3090/pets/vetvisits/:petid - GET request 

	7. Testing the smartcontract
		-execute the command "truffle test"