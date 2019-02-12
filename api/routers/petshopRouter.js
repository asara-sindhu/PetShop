const express = require('express')
const router = express.Router()
const petshopController = require('../controllers/petshopController')
const body_parser = require('body-parser')
router.use(body_parser.json());
router.post('/pets',petshopController.addPet);
router.put('/pets/:petId/adoption',petshopController.adopt);
router.get('/pets/foradoption',petshopController.getPetsForAdoption);
router.get('/pets/vetvisits/:petid',petshopController.getVetVisit);

module.exports = router;