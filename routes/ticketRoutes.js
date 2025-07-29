import express from "express"
import { createTicket } from '../controllers/ticketController.js'
import Ticket from "../models/Ticket.js"
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/buyTicket.html"));
});

router.post('/', createTicket);


export default router;