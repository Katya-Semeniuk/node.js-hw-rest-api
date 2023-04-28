// const { Contact } = require("../models/contact");
// const { HttpError, ctrlWrapper } = require("../helpers");

// const getAll = async (req, res) => {
//   const result = await Contact.find({}, "-createdAt -updatetAt");
//   res.json({
//     status: "success",
//     code: 200,
//     data: { result },
//   });
// };

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   console.log(contactId);
//   const result = await Contact.findById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.status(200).json(result);
// };

// const add = async (req, res) => {
//   const result = await Contact.create(req.body);
//   res.status(201).json(result);
// };

// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await Contact.findByIdAndRemove(contactId);
//   if (!result) {
//     throw HttpError(404, `Contact with id= ${contactId} not found`);
//   }
//   res.status(200).json({ message: "contact deleted" });
// };

// const updateById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await Contact.findByIdAndUpdate(contactId, req.body, {
//     new: true,
//   });
//   if (!result) {
//     throw HttpError(404, `Contact with id= ${contactId} not found`);
//   }
//   res.status(200).json(result);
// };

// const updateFavorite = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await Contact.findByIdAndUpdate(contactId, req.body, {
//     new: true,
//   });
//   if (!result) {
//     throw HttpError(404, `Contact with id= ${contactId} not found`);
//   }
//   res.status(200).json(result);
// };

// module.exports = {
//   getAll: ctrlWrapper(getAll),
//   getById: ctrlWrapper(getById),
//   add: ctrlWrapper(add),
//   deleteById: ctrlWrapper(deleteById),
//   updateById: ctrlWrapper(updateById),
//   updateFavorite: ctrlWrapper(updateFavorite),
// };
