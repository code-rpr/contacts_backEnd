const express = require("express");
const router = express.Router();
const {getContact,
       getAContact,
       createContact,
       updtaeContact,
       deleteContact} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getAContact).put(updtaeContact).delete(deleteContact);

module.exports = router;