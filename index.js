import Express from 'express';

import bodyParser from 'body-parser'; // allow to take incoming post request bodies

const app = Express();// initializing express application

const PORT = 5000;

app.use(bodyParser.json()); // middleWare initialization

app.get('/',(req,res)=>{ // we made a get request to forward slash '/'
    console.log('[TEST]');

    res.send('Hello from HomePage');
});

app.listen(PORT, ()=> console.log(`server running on port: http://localhost:${PORT}`));