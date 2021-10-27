import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World'
    })
})

export default app

