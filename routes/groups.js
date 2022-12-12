const express = require("express");
const { getGroup, postGroup } = require("../controllers/group");
const router = express.Router();

router.route("/").get(getGroup).post(postGroup);

module.exports = router;
