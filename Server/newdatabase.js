const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017')

function database(){
    return client.connect().then((databases)=>{
        var student=databases.db('studentdb')
        return student
    })
}
module.exports=database()