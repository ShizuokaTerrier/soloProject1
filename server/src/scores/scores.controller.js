const scoresModel = require('./scores.model')

module.exports = {
    async allScores(req,res){
        try {
            const allScores = await scoresModel.getAllScores();
            res.status(400).send(allScores);
        } catch (error) {
            console.log(error.message)
            res.status(400).send("Your attempt to see all scores was unsuccessful")
        }
    },

    async getAllScoresForOne(req,res){
        try {
            const id = parseInt(req.params.id);
            const allOneUsersScores = await scoresModel.getOneUsersScores(id);
            res.status(400).send(allOneUsersScores);
        } catch (error) {
            console.log(error.message)
            res.status(400).send("Your attempt to see all one user's scores was unsuccessful")
        }
    },

    async addScores(req,res){
        try {
            const newScore = req.body
            const addScore = await scoresModel.addScore(newScore);
            res.status(200).send(`The following data was added ${JSON.stringify(addScore)}`)
        } catch (error) {
            console.log(error.message);
            res.status(400).send("That didn't go quite to plan...");
        }
    },

    async deleteAllUsersScores(req,res){
        try {
            const id = parseInt(req.params.id);
            const deletedScores = await scoresModel.deleteScoresForOneUser(id);
            res.status(200).send(`You deleted all the scores for user ${id} `);
        } catch (error) {
            console.log(error.message);
            res.status(400).send("That didn't go quite to plan...");
        }
    }
}