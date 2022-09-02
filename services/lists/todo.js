const TodoModel = require("../../models/lists/todos");
const conn = require("../../utility/conn");
const { ObjectId } = require('mongodb');

const TodoService = {

    async addListTodo (data) {
        try{
            let todo = new TodoModel(data);
            let result = await todo.save();
            return {
                message: "Todo added successfully",
                list: result._doc,
            };
        }catch (err) {
            return err;
        }
    },

    async updateListTodoStatus (data) {
        try{
            let result = await TodoModel.updateOne({_id: ObjectId(data._id)},
                [
                    {$set:{
                            marked: {
                                // $not: "$marked"
                                $eq: [false,'$marked']
                            }
                        },
                    },
                ],
            );
            return {
                message: "Todo Status updated successfully",
                list: result._doc,
            };
        }catch (err) {
            return err;
        }
    },

    async updateListTodo (data) {
        try{
            let result = await TodoModel.findOneAndUpdate({_id: ObjectId(data._id)},
                {
                    title: data.title
                }
            );
            return {
                message: "Todo updated successfully",
                todo: result._doc,
            };
        }catch (err) {
            return err;
        }
    },

    async getAllTodos(id){
        try{
            let result = await TodoModel.find({list_id:id});
            return {
                message: "Todos data",
                listTodos: result,
            };
        }catch (err) {
            return err;
        }
    },

    async deleteListTodo (id) {
        try{
            let result = await TodoModel.findByIdAndDelete({_id: id});
            return {
                message: "Todo deleted successfully",
                todo: result._doc,
            };
        }catch (err) {
            return err;
        }
    },
}

module.exports = TodoService;
