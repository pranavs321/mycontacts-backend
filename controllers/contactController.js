//@desc Get all the contacts
//@route GET /api/contacts
//@access public
const getContacts=(req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};
  
//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact=(req, res) => {
  console.log("The request body is:",req.body);
  const {name,email,phone}=req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("Alll feilds are mandatory");
  }
  res.status(201).json({ message: "Create contacts" });
  }

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact=(req, res) => {
    res.status(200).json({ message: `Get contact with ID ${req.params.id}` });
  }

//@desc Update contact
//@route PUT/api/contacts/:id
//@access public
const updateContact=(req, res) => {
    res.status(200).json({ message: `Update contact with ID ${req.params.id}` });
  }


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact=(req, res) => {
    res.status(201).json({ message: "Create contacts" });
  }


  module.exports={getContacts,createContact,getContact,updateContact,deleteContact};