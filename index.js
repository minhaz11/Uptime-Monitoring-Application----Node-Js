/*
title : Uptime Monitoring Application
description : A RESTFul API to monitor up or down time of user defined links
author : Md. Minhajul Islam
date : 10/10/2020
*/ 

// Dependencies
const http = require('http');
const {handleRequest} = require('./helpers/handleRequest');

const app = {};

app.config = {
    port : 3000
};

app.createServer = () => {
  const server = http.createServer(app.handleRequest);
    server.listen(app.config.port, () => {
        console.log(`Server is running on port ${app.config.port}`);
    });
}

app.handleRequest = handleRequest;

app.createServer();
