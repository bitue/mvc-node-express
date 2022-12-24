const mongoose = require('mongoose')
const config = require('./config')


exports.databaseConnect = async () => {
    try {
        await mongoose.connect(config.db.url)
        console.log('DB connected')
        
    } catch (error) {
        console.log(error.message)
        process.exit(1)

        
    }
  

}

