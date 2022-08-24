const express=require("express")

var cors = require("cors");
const app=express()
const {Model} = require("./config/database")
var corsOptions = {
    origin: "*"
  };
  
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
app.post("/upload",async (req,res)=>{
    console.log(req.body)
    const data= req.body
    if(!data) return res.status(403).send()
    const sheetName=data[0].sheet_name;
    const rowData=data.map(d=>{
        return {
            name:d.row_data["Name"],
            age:d.row_data["Age"]
        }
    })
    console.log({rowData,sheetName});

    const newItem= new Model({sheetName,rowData})
    const savedItem=await newItem.save()
    res.send(savedItem)


})

app.get("/saved",(req,res)=>{
    Model.find().then(data=>{
        const dataToSend=data.map(({sheetName,rowData})=>{
            return {sheetName,rowData}
        })
        res.send(dataToSend)
    })
})
app.use(express.static(__dirname + "/vite-project/dist"))
app.listen(process.env.PORT || 5000)