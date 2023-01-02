const app = require('./app');

const PORT = process.env.PORT || 4000;


//port to listen

app.listen(PORT, () => {
    console.log(`App is running at http://${PORT}`);
})