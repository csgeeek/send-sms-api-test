const express = require('express');
const router = express.Router();

const Appointment = require('../models/Appointment');
var axios = require('axios');
var qs = require('qs');
require('dotenv').config();
// console.log(process.env.USER_NAME);

router.get('/', (req, res) => {
    res.render('home');
})

router.post('/appointment', async (req, res) => {
    // console.log(req.body);
    const newAppointment = new Appointment({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        appt: req.body.appt,
        details: req.body.details
    });
    console.log(typeof(req.body.phone));
    try{
        await newAppointment.save();
        var data = qs.stringify({
            'username': process.env.USER_NAME,
            'key': process.env.API_KEY,
            'method': 'http',
            'to': '+91' + req.body.phone,
            'message': 'Hello ' + req.body.name + ', your appointment is scheduled for ' + req.body.appt + '.',
            'senderid': 'mycompany' 
          });
          var config = {
            method: 'post',
            url: 'https://api-mapper.clicksend.com/http/v2/send.php',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          console.log(data);
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });

          
        res.redirect('/');
    }
    catch(err){
        res.render('home', {errorMessage: 'Error saving appointment'});
    }
});

module.exports = router;