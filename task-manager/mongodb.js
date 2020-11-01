// "C:\Program Files\mongodb-4.4.1\bin\mongod.exe" --dbpath="C:\Program Files\mongodb-4.4.1\data"
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log("id", id)
console.log("timestamp", id.getTimestamp())
console.log("id", id.toHexString())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database', error)
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        completed: true
    }).then((result) => {
        console.log("result", result)

    }).catch((error) => {
        console.log("error", error)

    })

})