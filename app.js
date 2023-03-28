var express=require("express");
var mongoose =require("mongoose");
var bodyParser=require("body-parser");
var app=express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27000/todolistDB");
const itemSchema={
    name:String
}
const Item=mongoose.model("Item",itemSchema);
const item1=new Item({
    name:"1"
})
const item2=new Item({
    name:"2"
})
const item3=new Item({
    name:"3"
})
const d=[item1,item2,item3];
Item.insertMany(d,function(err){
    if(err){
       console.log(err) ;
    }
    else{
        console.log("Successfully saved");
    }
})
app.get("/",function(req,res){
    //res.send("<h1>Hey</h1>");
    res.render("list",{newListItems:i1});
})
app.post("/",function(req,res){
    i=req.body.n;
    //console.log(i);
    i1.push(i);
    //res.render("list",{newListItem:i});
    res.redirect("/");
})



app.listen(3000,function()
{
    console.log("Listening to port 3000");
})