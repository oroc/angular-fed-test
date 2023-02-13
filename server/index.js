const express = require('express');
const propertiesService = require('./service/properties');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api/properties', async (req, res, next) => {
  try {
    if (Object.keys(req.query).length) {
      res.send(await propertiesService.getProperties(req.query));
    } else {
      res.send(await propertiesService.getAllProperties());
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500) && next();
  }
});

app.listen(4201, () => {
  console.log('Listening on: localhost:4201');
});
