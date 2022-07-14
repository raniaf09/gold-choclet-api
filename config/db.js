const mongoose = require("mongoose")

let DATABASE_URI = "mongodb://localhost:27017"
let DATABASE_NAME = "school-management"

mongoose
    .connect(`${DATABASE_URI}/${DATABASE_NAME}`)
    .then(() => { console.log("🟢 Connection to database success ! "); })
    .catch(() => { console.log("Error Connection to database ! "); })

module.exports = mongoose