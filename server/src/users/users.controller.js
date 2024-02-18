const userModel = require('./users.model')

module.exports = {
    async allUsers(req,res){
        try {
            const allUsers = await userModel.getAllUsers();
            res.status(200).send(allUsers);
        } catch (error) {
            console.log(error.message);
            res.status(400).send("Invalid request");
        }
    },
    async getSingleUser(req,res){
        try {
            const id = parseInt(req.params.id);
            const getSingleUser = await userModel.getSingleUser(id);
            res.status(400).send(getSingleUser);
            
        } catch (error) {
            console.log(error.message);
            res.status(400).send("I don't think they exist...");
        }
    },
    async addANewUser(req,res){
        try {
            const newUserData = await userModel.addNewUser(req.body);
            res.status(200).send(newUserData);
        } catch (error) {
            console.log(error.message);
            res.status(400).send("That didn't go quite to plan...")
        }
    },
    async deleteUser(req,res){
        try {
             const id = parseInt(req.params.id);
             const deletedUserInfo = await userModel.deleteUser(id);
             res.status(200).send(`User ${id} was deleted`);
        } catch (error) {
            console.log(error.message);
            res.status(400).send("You deleted zero users - try again");
        }
    },

    async updateUser(req,res){
        try {
            const id = parseInt(req.params.id);
            const updateInfo = req.body;
            const updateTheUser = await userModel.updateUser(id, updateInfo);
            const afterUpdate = await userModel.getSingleUser(id);
            res.status(200).send(`Success! Here is the updated user info: ${JSON.stringify(afterUpdate)}`);
        } catch (error) {
            console.log(error.message);
            res.status(400).send("You updated precisely nothing - try again");
        }
    }
}
