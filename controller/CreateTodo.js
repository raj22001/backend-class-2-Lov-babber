const Todo = require("../models/Todo");

exports.CreateTodo = async(req , res) =>{
    const {title , description} = req.body;

    const response = await Todo.create({title , description});
    try{
    res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry created'
        }
    );
}
    catch(error){
        console.error(error);
        console.log(error)

        res.status(500)
            .json({
                success:false,
                data:"internal server error",
                message:error.message,
            })
    }

}