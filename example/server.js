const express = require('express');
const fs = require('fs').promises;
const axios = require('axios')
var exphbs  = require('express-handlebars')
const path = require('path')

const app = express();

const handlebars = require('handlebars');

const getTemplate = async (file = 'main') => {
  handlebars.registerHelper('json', (obj) => JSON.stringify(obj, null, 3));
  const code = await fs.readFile(`${__dirname}/views/${file}.handlebars`);
  const template = handlebars.compile(code.toString());
  return template;
};

app.use('/dist', express.static('dist'));

app.get('/', async (req, res) => {
  try {
    const template = await getTemplate();
    const html = template({ });
    res.write(html);
  } catch (e) {
    res.json(e.message);
  }
});


app.engine('handlebars', exphbs({layoutsDir: "", defaultLayout: ""}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');


app.get('/jwt-auth', async (req, res) => {
  try {
    const template = await getTemplate('jwt-template');
    const { API_URL, API_KEY } = process.env;
    const customerId = 'idToPassOneVerification';
    const { data } = await axios.post(`${API_URL}/sdk/v2/token`, { customerId }, { headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', apiKey: API_KEY}});
    res.render('jwt-template.handlebars', {jwt: JSON.stringify(data?.token)});
  } catch (e) {
    res.json(e.message);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, '', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
