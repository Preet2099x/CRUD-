import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes  from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: '30mb', extended: 'true'}))
app.use(bodyParser.urlencoded({limit: '30mb',  extended: 'true'}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Preet2099x:Asmiov123@crud.ul4zyho.mongodb.net/?retryWrites=true&w=majority&appName=CRUD'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

