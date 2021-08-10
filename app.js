// export AIRTABLE_API_KEY=keyYtAo04su8CVgyb;


const base = require("airtable").base("appWKP80d1ItnOZnw");

(async () => {
    const records = await base("Business Hours")
    .select({
      view: "Grid view",
    })
    .firstPage()

    for (const record of records) {
        // console.log(record.fields);
        console.log(record.get("Day"), record.get("Hours"))
    }
})();
