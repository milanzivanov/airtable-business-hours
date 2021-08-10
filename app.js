// export AIRTABLE_API_KEY=keyYtAo04su8CVgyb;
const base = require("airtable").base("appWKP80d1ItnOZnw");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "."));

let records;

app.get('/', async (req, res) => {
    if (records) {
      console.log('cached');
      res.render('page', {
        records,
      });
    } else {
      (async () => {
        records = await base('Business Hours')
          .select({
            view: 'Grid view',
          })
          .firstPage()
  
        res.render('page', {
          records,
        })
  
        setTimeout(() => {
          records = null
        }, 10 * 1000);
      })();
    }
});

app.listen(3000, () => console.log("Server ready"));

