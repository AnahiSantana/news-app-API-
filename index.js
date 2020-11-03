const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const cors = require('cors');
const bodyParser = require('body-parser');
const news = require('./news');
const apiNews = require('./api');
const apiRoutes = require('./routes');
const jsonParser = bodyParser.json();

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', 'src/views');

app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use('/api', )


news(app);

app.use('/api', jsonParser);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log('App is running in port ' + port);
})


