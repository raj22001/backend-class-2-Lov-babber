const express = require("express");
const router =  express.Router();

const {CreateTodo} = require("../controller/CreateTodo");
const {getTodos} = require("../controller/getTodos")

router.post("/CreateTodo",CreateTodo);
router.get("./getTodos" , getTodos);


module.exports = router