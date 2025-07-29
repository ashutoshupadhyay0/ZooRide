import express from 'express'
import mongoose from 'mongoose'
import path from "path"
import  ticketRoutes  from './routes/ticketRoutes.js'
import { fileURLToPath } from "url"

const app = express();
const port = 6800;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/views'));

// mongoose.connect('mongodb://127.0.0.1:27017/ZooRide')
mongoose.connect('mongodb://127.0.0.1:27017/AmitPal')

const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB Connected Successfully!");
});


app.use('/buyTicket', ticketRoutes);

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'views', 'buyTicket.html')));
app.get('/printTicket', (_, res) => res.sendFile(path.join(__dirname, 'views', 'printTicket.html')));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})