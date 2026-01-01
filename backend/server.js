const express=require("express");
const app=express();
const cors= require("cors");
const mysql=require("mysql");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"master"
});
app.get("/",(req,res)=>{
  const sql="select * from customer order by cust_id desc";
  
  db.query(sql,(err,data)=>{
    if(err) return res.json("error");
    return res.json(data);
  });
});

//wait
app.get("/login",(req,res)=>{
  const sql="select * from signup where username=?";
  const values=[req.body.username];
  console.log(values);
  db.query(sql,(err,data)=>{
    if(err)return res.json("Error");
    return res.json(data);
  });
});
app.get('/read/:cust_id',(req,res)=>{
  const sql = "Select * from customer where cust_id =?";
  const cust_id = req.params.cust_id;
  
  db.query(sql,[cust_id],(err,data)=>{
    if(err) return res.json("Error");
    return res.json(data);
  });
})


app.post("/customer", (req, res) => {
  fetch("http://localhost:8081/")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let latest_id = data[0].cust_id;
      console.log(latest_id);

      latest_id = latest_id + 1;
      console.log(latest_id);

      const sql = "INSERT INTO customer (cust_id, cust_name, cust_amount, cust_address) VALUES(?)";
      const values = [latest_id, req.body.cust_name, req.body.cust_amount,req.body.cust_address];

      db.query(sql, [values], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      });
    });
});


app.put('/read/:cust_id',  (req, res) => {
  const sql = 'update customer set ? where cust_id = ?'
  const id = req.params.cust_id;
  const values = req.body;

  db.query(sql, [values, id], (result, err) => {
    if(err) return res.json("Error")

    return res.json("Updation successful")
  })

})


app.listen(8081, ()=> {
        console.log("listening");
});

