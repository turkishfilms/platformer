import express from 'express'

const PORT = process.env.port || 3011;
const app = express();
const server1 = app.listen(PORT, () => console.log(`Its a Me Mario 127.0.0.1`, PORT));
app.use(express.static('public'));
