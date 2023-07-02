const Todo = require("../models/Todo");

exports.getTodos = async(res , req) =>{
    try{
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:'know data is availabel'
        })
    }
    catch(error){
        console.error(error);
        console.log(error)

        res.status(500)
            .json({
                success:false,
                error : error.message,
                message:"server Error"
            })
    }
}