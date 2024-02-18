const knex = require('./../../knex')

const SCORES = 'scores';

module.exports = {
    SCORES,

    getAllScores(){
        return knex(SCORES).select(`*`);
    },

    getOneUsersScores(id){
        return knex(SCORES)
        .where('user_id','=', id)
        .select('*')
    },

    addScore(reqparams){
        return knex(SCORES)
        .insert({
            "user_id": reqparams.userid,
            "score": reqparams.score
        }).returning('*');
    },
    deleteScoresForOneUser(id){
        return knex(SCORES)
        .where('id','=', id).del()
    },

}