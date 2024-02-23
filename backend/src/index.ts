import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const porta = process.env.API_PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => { console.log(`Servidor executando na porta ${porta}!`) })