require('dotenv').config();


const dev = {
    app : {
        port : process.env.PORT || 4000 
    },
    db : {
        url : process.env.DB ||  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1"
    }
}

module.exports = dev ;