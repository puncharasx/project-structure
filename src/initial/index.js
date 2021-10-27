import mongoose from 'mongoose'
import config from '../../config'

const initial = {
    connectDB : async () => {
        switch (config.database.driver) {
            case 'mongo':
                await mongoose.connect(config.database.stores.mongo.url)
                return {
                    database: config.database.driver,
                    collection: ''
                }
            default:
                break
        }
    }
}

export default initial