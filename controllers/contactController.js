//@ GET all contacts
//@ Route GET /api/contacts
//@ access Public
const getContact = (req,res) => {
    res.status(200).json({message : "Get all Contacts"})
 };

//@ GET a contacts
//@ Route GET /api/contacts/:id
//@ access Public
const getAContact = (req,res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`})
 };

 //@ Create a contacts
//@ Route POST /api/contacts
//@ access Public
const createContact = (req,res) => {
    res.status(201).json({message : "Create a new Contact"})
};

 //@ updtaeContact a contacts
//@ Route PUT /api/contacts/:id
//@ access Public
const updtaeContact =(req,res) => {
    res.status(200).json({message : `Update contact for ${req.params.id}`})
};


 //@ deleteContact a contacts
//@ Route DELETE /api/contacts/:id
//@ access Public
const deleteContact = (req,res) => {
    res.status(200).json({message : `Delete contact for ${req.params.id}`})
};

 module.exports = {getContact,
                   getAContact,
                   createContact,
                   updtaeContact,
                   deleteContact};