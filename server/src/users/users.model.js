const knex = require('../../knex')
const USER_TABLE = 'user_table';

module.exports = {
    USER_TABLE,
    getAllUsers(){
        return knex(USER_TABLE).select('*')
    },

    getSingleUser(id){
        return knex(USER_TABLE).where('id', '=', id).select('*');
    },

    addNewUser(reqbody){
        return knex(USER_TABLE)
        .insert({
            "id": reqbody.id,
            "username": reqbody.username,
            "email": reqbody.email,
            "password": reqbody.password,
        })
        .returning('*');
    },
    deleteUser(id){
        return knex(USER_TABLE)
        .where('id', '=', id).del()
    },

    updateUser(id,updateInfo){
        return knex(USER_TABLE)
        .where('id', '=', id)
        .update(updateInfo);
    },

    loginAUser(reqbody){
        return knex(USER_TABLE)
        .where("username", reqbody.username).returning('*');
    }

}