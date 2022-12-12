const Group = require("../models/group");

const getGroup = async (req, res) => {
  try {
    const groups = await Group.find({});
    res.status(200).json({ groups });
  } catch (error) {
    console.log(error);
  }
};

const postGroup = async (req, res) => {
  try {
    const { title, imageURL, count } = req.body;
    const item = {
      title,
      imageURL,
      count,
    };
    await Group.create(item);
    res.status(201).json({ item });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getGroup, postGroup };
