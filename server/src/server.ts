import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('teste');

    return res.send('teste')
});


app.listen(3333)