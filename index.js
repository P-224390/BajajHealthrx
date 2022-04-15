const express = require('express');
const app = express();

app.use(express.json());

PORT = process.env.PORT || 5000;



app.post("/bfhl", async(req, res) => {
    try {
        const response = {
            "is_success": true,
            "user_id": "Piyush_Tejwani_20122000",
            "email": "piyushtejwani1000@gmail.com",
            "roll_number": "0832CS191123",
            "numbers": [],
            "alphabets": []
        }


        const { data } = req.body;
        for (let element of data) {
            if (isNaN(parseInt(element))) {
                response.alphabets.push(element);
            } else {
                response.numbers.push(element);
            }
        }
        res.json(response);


    } catch (error) {

    }
});



app.listen(PORT, () => {
    console.log("Server running on port " + PORT + ".");
})