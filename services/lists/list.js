const ListModel = require("../../models/lists/lists");
const TodoModel = require("../../models/lists/todos");
const conn = require("../../utility/conn");

const ListService = {

    async addList (data) {
        try{
            let list = new ListModel(data);
            let result = await list.save();
            return {
                message: "List added successfully",
                list: result._doc,
            };
        }catch (err) {
            return err;
        }
    },

    async updateList (data) {
        try{
            let result = await ListModel.updateOne({_id: data._id},{name: data.name});
            return {
                message: "List updated successfully",
                list: result._doc,
            };
        }catch (err) {
            return err;
        }
    },

    async getAllLists(){
        try{
            let result = await ListModel.find({});
            return {
                message: "Lists data",
                lists: result,
            };
        }catch (err) {
            return err;
        }
    },

    async deleteList (id) {
        try{
            let result = await ListModel.findByIdAndDelete({_id: id});
            if(result){
                await TodoModel.find({list_id:id}).remove();
            }
            return {
                message: "List deleted successfully",
                list: result._doc,
            };
        }catch (err) {
            return err;
        }
    },
}

module.exports = ListService;
