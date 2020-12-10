const express = require('express'),

app = express(),

axios  = require('axios'),

consumerKey = process.env.MPESA_CONSUMER_KEY,

consumerSecret = process.env.MPESA_CONSUMER_SECRET,

credentialsUrl = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",

auth = "Basic " + new Buffer.from(consumerKey + ":" + consumerSecret).toString("base64"),

getToken = () => axios.
    get( credentialsUrl, { headers : { "Authorization" : auth } } ).
    then(response => response.data);




app.use( express.json() )

app.get( '/mpesa_payment', function (req, res) {
   
    res.status( 201 ).send( { hello: 'hello world' } );
})

app.get( '/get_token', async (req, res) => {
    const token = await getToken();
    
    res.status( 200 ).send( { token } )
})

app.listen(3000, () => {
    console.log('Server Running on 3000...');
})
