const path = require('path');
const express= require('express');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

const PORT = 3000 || process.env.PORT;

app.listen(PORT , ()=>console.log(`server is running in port ${PORT}`));

// app.listen(3000 , ()=>console.log(`server is working in the port ${3000}`))