const userModel = require('./users.model')
const bcrypt = require('bcrypt');

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
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            const user = {username:req.body.username, email:req.body.email, password: hashedPassword}
            const newUserData = await userModel.addNewUser(user);
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
    },

    async userLogin(req,res){
        try {
            const loginInfo = req.body;
            const loginTheUser = await userModel.loginAUser(loginInfo);
            console.log(loginInfo.password)
            console.log(loginTheUser.password)
            bcrypt.compare(loginInfo.password, loginTheUser.password, function(err,result){
                if(err){
                    console.log(err);
                    res.status(500).send("Error when comparing password")
                    return
                }
3
                if(result) {
                    console.log("User autheticated");
                    res.status(200).send(objectToReturn);
                } else {
                    console.log("Incorrect Password");
                    res.status(401).send("Nope... we don't recognise that password")
                }
            })
            
        } catch (error) {
            console.log(error.message);
            res.status(400).send("You failed to login")
        }
    }
}
