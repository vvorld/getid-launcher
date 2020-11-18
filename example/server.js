const express = require('express');
const fs = require('fs').promises;

const app = express();

const handlebars = require('handlebars');

const getTemplate = async () => {
  handlebars.registerHelper('json', (obj) => JSON.stringify(obj, null, 3));
  const code = await fs.readFile(`${__dirname}/views/main.handlebars`);
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

const port = process.env.PORT || 3000;

app.listen(port, '', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
