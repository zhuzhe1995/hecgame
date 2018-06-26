'use strict';
const express = require('express');
const app = express();
app.use(express.static('./website'));
app.listen(8080,()=> {
  console.log('Express Server 01 Started.');
});
