const mongo = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongo.getDatabase().db().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader('Contenty-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

const getSingle = async (req, res) => {
  // getting contact by id

  const contactId = new ObjectId(req.params.id);
  const result = await mongo.getDatabase().db().collection('contacts').find({ _id: contactId });

  // returning data
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  });
};

const getSinglebyId = async (id) => {
 const result = await mongo.getDatabase().db().collection('contacts').find({ _id: id });
  result.toArray().then((contacts) => {
    return contacts[0];
  });
}

const createContact = async (req, res) => {
  console.log(req.body);

  try {
    // Validating request
    if (!req.body.firstName) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }

    // testing
    console.log(req.body._id);

    // getting _id if in request and creating new contact
    let newContact;
    if (req.body._id != null) {
      newContact = {
        _id: new ObjectId(req.body._id),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };
    }
    else {
      newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      }
    }

    // saving new contact in mongodb
    const result = await mongo.getDatabase().db().collection('contacts').insertOne(newContact);
    res.status(201).send(result.insertedId);
  } catch (err) {
    console.error(err);

    res.status(500).send({
      message: 'Error creating contact'
    });
  }
};

const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  try {
    // getting orinial contact and moving forward with update
    const ogContact = await getSinglebyId(contactId);

    const result = await mongo
      .getDatabase()
      .db()
      .collection('contacts')
      .updateOne(
        { _id: contactId },
        {
          $set: {
            firstName: req.body.firstName ?? ogContact.firstName,
            lastName: req.body.lastName ?? ogContact.lastName,
            email: req.body.email ?? ogContact.email,
            favoriteColor: req.body.favoriteColor ?? ogContact.favoriteColor,
            birthday: req.body.birthday ?? ogContact.birthday
          }
        }
      );
    res.status(200).send('Update Successful');
  } catch (error) {
    console.error(error);
  }
};

const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  try {
    const result = await mongo
      .getDatabase()
      .db()
      .collection('contacts')
      .deleteOne({ _id: contactId });
    res.status(200).send('Deletion Successful');
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getAll, getSingle, createContact, updateContact, deleteContact };
