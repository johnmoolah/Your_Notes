const express = require("express");
const app = express();
const apiRoutes = require("./routes/api-Routes");
const PORT = 5000;

//Setup to recieve JSON and string data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes as middleware
app.use('/api', apiRoutes);


//listening server
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))