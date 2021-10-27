import dotenv from 'dotenv'

dotenv.config()

export default {
    server: {
        port: 8080
    },
    database: {
        driver: 'mongo',
        stores: {
            mongo: {
                url: process.env.MONGO_URL,
                collection: ''
            },
            mysql: {
                host: '',
                user: '',
                password: '',
                db: ''
            },
            redis: {
                port: 6379,
                host: '127.0.0.1',
                password: '1234',
                db: 0
            }        
        }
    }

}