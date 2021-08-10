// export AIRTABLE_API_KEY=keyYtAo04su8CVgyb;
const base = require("airtable").base("appWKP80d1ItnOZnw");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "."));

app.get("/", (req, res) => {
    //your existing code
    (async () => {
        const records = await base("Business Hours")
        .select({
          view: "Grid view",
        })
        .firstPage()
    
        res.render('page', {
            records,
        });

    })();
});

app.listen(3000, () => console.log("Server ready"));

