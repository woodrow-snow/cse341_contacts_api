const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

/* ***********************************************
 * Get routes
 * *********************************************** */
router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

/* ***********************************************
 * Post Routes
 * *********************************************** */
router.post('/', contactsController.createContact);

/* ***********************************************
 * Put Routes
 * *********************************************** */
router.put('/:id', contactsController.updateContact);

/* ***********************************************
 * Delete Routes
 * *********************************************** */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
