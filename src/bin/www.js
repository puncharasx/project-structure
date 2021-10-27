import app from '../app'
import initial from '../initial'
import config from '../../config'

const PORT = config.server.port

const server = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`✅ RUNNING ON PORT: ${PORT}`)
        })
        const db = await initial.connectDB()
        console.log(`✅ CONNECTED DATABASE : ${db.database}`)
    } catch (err) {
        console.log(err)
        return false
    }
}
 
server()
