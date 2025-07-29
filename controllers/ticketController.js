import Ticket from "../models/Ticket.js"

export const createTicket = async(req, res) => {
    try {
        const { contact, numberofpeople, email } = req.body;

        const peopleCount = parseInt(numberofpeople);

        const price = peopleCount * 20;
        const tax = 0.5 * peopleCount;
        const totalprice = price + tax + 5;
        const taxID = "TAX123456789";
        const invoiceId = "INV" + new Date().toISOString().replace(/[-:.TZ]/g, "") + Math.floor(Math.random() * 1000);


        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString()
        

        const ticket = new Ticket({
            contact,
            email,
            numberofpeople: peopleCount,
            totalprice,
            tax,
            taxID,
            invoiceId,
            date,
            time,
        });

        await ticket.save();
        console.log('Saved Ticket : ', ticket);

        const queryParams = new URLSearchParams({
            contact,
            email,
            numberofpeople: peopleCount,
            totalprice,
            tax,
            taxID,
            invoiceId,
            date,
            time
        });
        // res.status(200).json("Successfully Saved : ", ticket)
        res.redirect(`printTicket.html?${queryParams.toString()}`);
    }
    catch (error) {
        console.log("Error saving ticket : ", error);
        res.status(500).json({ message: "Internal sever error" });
    }

}

