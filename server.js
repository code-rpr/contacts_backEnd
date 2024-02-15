const express = require("express");
const dotenv = require("dotenv").config()
const errorHandler = require("./middleware/errorHnadler");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts",require("./Routes/contactRoute"));
app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`server is listning on port ${port}`);
});

