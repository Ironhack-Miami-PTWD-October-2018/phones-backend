const express = require("express");

const Phone = require("../models/phone-model.js");

const router = express.Router();


// POST "/api/phones" - Create a new phone
router.post("/phones", (req, res, next) => {
    const { model, brand, price, image, specs } = req.body;
  
    Phone.create({ model, brand, price, image, specs })
      // send the query results as a JSON response to the client
      .then(phoneDoc => res.json(phoneDoc))
      .catch(err => next(err));
});

// GET /phones - Retrieve the list of phones
router.get("/phones", (req, res, next) => {
  Phone.find()
    // sort the newest phones first
    .sort({ createdAt: -1 })
    .limit(20)
    // send the query results as a JSON response to the client
    .then(phoneResults => res.json(phoneResults))
    .catch(err => next(err));
});

// GET /phones/:id - Retrieve the details of ONE phone
router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  Phone.findById(id)
    // send the query results as a JSON response to the client
    // .then(phoneDoc => res.json({message: "Phone details:", phoneDoc})) <== example of passing other data within object
    .then(phoneDoc => res.json(phoneDoc))
    .catch(err => next(err));
});


// PUT /phones/:id - Update ONE phone
router.put("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  const { model, brand, price, image, specs } = req.body;
  
  // Phone.findByIdAndUpdate(id, req.body)
  Phone.findByIdAndUpdate(
    id,
    { $set: { model, brand, price, image, specs } }
  )
  .then(phoneDoc => res.json(phoneDoc))
  .catch(err => next(err));
});


// DELETE /phones/:id - Delete ONE phone
router.delete("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  Phone.findByIdAndRemove(id)
    .then(phoneDoc => res.json({message: `You successfully deleted ${phoneDoc.model} by ${phoneDoc.brand}  ✅`}))
    .catch(err => next(err));
});
module.exports = router;
