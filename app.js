 // require modules
 const express = require('express')
 const app = express(); 
 const dotenv = require('dotenv');
 const {errorHandler} = require('./src/middleware/middleware')
 const PORT = process.env.PORT || 8080 
 
dotenv.config();

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// routes
app.use('/api/blogs', require('./src/routes/userRoute'))
app.use(errorHandler);

 app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
 });