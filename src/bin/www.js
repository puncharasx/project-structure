import app from '../app'

const PORT = 8080 || 3000

const server = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`RUNNING ON PORT: ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
} 
server()
