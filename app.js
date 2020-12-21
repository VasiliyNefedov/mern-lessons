import express from 'express';
const config = require('config')
import mongoose from 'mongoose'

const app = express()


const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {

        })
    } catch (e) {
        console.log(`Server error: ${e.message}`)
        process.exit(1)
    }
}

start()

app.listen(5000, () => console.log(`App has been started on port ${PORT}...`))