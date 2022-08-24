const mongoose = require('mongoose');


const { Schema } = mongoose;
require('dotenv').config(); 

let connUri=process.env.DEV_DB_URI || process.env.DB_URI
mongoose
  .connect(connUri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((err) => {
    console.log("Could not connect to mongoose;Error: ", err);
  });

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register

modelSchema = new Schema({
    sheetName: {type:String,required:true},
    rowData: [{
      name:{type:String},
      age:{type:String}
    }],
   
    
  });
  
const Model = mongoose.model('CSV', modelSchema);





module.exports = {Model};
