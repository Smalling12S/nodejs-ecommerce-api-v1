const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://Mohamed:wfCSC7Sn9z@cluster0.drzghpm.mongodb.net/ecommerce-db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((conn) => {
      console.log(`Database Connected: ${conn.connection.host}`);
    })
    // .catch((err) => {
    //   console.error(`Database Error: ${err}`);
    //   process.exit(1);
    // });
};



module.exports = dbConnection;
