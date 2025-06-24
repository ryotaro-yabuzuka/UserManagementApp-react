import express from 'express'
import showrooms from './routes/showrooms'
import sessions from './routes/sessions'
import announcements from './routes/announcements'
import auth from './middlewares/auth'

const app = express()
app.use(express.json())
app.use(auth)
app.use('/showrooms', showrooms)
app.use('/sessions', sessions)
app.use('/announcements', announcements)

app.listen(3000, () => console.log('api running'))
