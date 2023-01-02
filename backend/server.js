const app = require('./app');

const PORT = process.env.PORT || 4000;

const { connectToDb } = require("../backend/database/db");

//DB connection
connectToDb();

//port to listen
app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
})