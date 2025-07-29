import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
    contact: String,
    email: String,
    numberofpeople: Number,
    totalprice: Number,   
    tax: Number,
    taxID: String, 
    invoiceId: String,
    date: String,
    time: String,
});

export default mongoose.model('Ticket', ticketSchema);