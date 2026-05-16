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
// Creates a new contact within the database. If you do not have an ID you wish to use please remove the _id line.
router.post(
    '/',
    // #swagger.description = 'Creates a new contact within the database. If you do not have an ID you wish to use please remove the _id line.'
    contactsController.createContact
);

/* ***********************************************
 * Put Routes
 * *********************************************** */
router.put('/:id',
    // #swagger.description = 'Updates an entry in the database. Please remove lines that you don't want to update.'
    contactsController.updateContact);

/* ***********************************************
 * Delete Routes
 * *********************************************** */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
