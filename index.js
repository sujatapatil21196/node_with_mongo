let secret=require('./mongo_data_devomato/config');
let express = require('express');

let bodyParser=require('body-parser');
let bcrypt=require('bcryptjs');
let jwt=require('jsonwebtoken');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
const { config } = require('dotenv');
let MongoClient = mongo.MongoClient;
let MongoUrl =  "mongodb+srv://Sujatapatil:Sujata21196@cluster0.dqyo1.mongodb.net/?retryWrites=true&w=majority";
let db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
    res.send("</h1>Hii from Express");
})
//1)list of Cities
//http://localhost:9500/location
app.get('/location', (req, res) => {
    db.collection('location').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//2)list of restaurant
//http://localhost:9500/restaurant
app.get('/restaurant', (req, res) => {
    db.collection('restaurants').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//3)login
//http://localhost:9500/login
app.get('/login', (req, res) => {
    db.collection('login').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//4)register
//http://localhost:9500/register
app.get('/register', (req, res) => {
    db.collection('register').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//5)users
//http://localhost:9500/users
app.get('/users', (req, res) => {
    db.collection('users').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//6)menu
//http://localhost:9500/menu
app.get('/menu', (req, res) => {
    db.collection('menuList').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//7)meal type
//http://localhost:9500/mealtype
app.get('/mealtype', (req, res) => {
    db.collection('mealType').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//8)order
//http://localhost:9500/order
app.get('/order', (req, res) => {
    db.collection('order').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//params
//http://localhost:9500/restaurants/2
app.get('/restaurants/:stateId', (req, res) =>
{
    let stateId=Number(req.params.stateId);
    let query = {}
    if (stateId) {
        query = { state_id: stateId };
    }
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//query params
//http://localhost:9500/restaurants?stateId=1
app.get('/restaurants', (req, res) =>
{
    let stateId=Number(req.query.stateId);
    let query = {}
    if (stateId) {
        query = { state_id: stateId };
    }
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//Restaurants wrt City
//http://localhost:9500/city?stateId=2
app.get('/city', (req, res) => {
    let stateId = Number(req.query.stateId);
    let query = {}
    if (stateId) {
        query = { state_id: stateId };
    }
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//list of quick search
//http://localhost:9500/mealtype
app.get('/mealtype', (req, res) => {
    let mealId=req.query.mealId;
    query={};
    if(mealId){
        query={"mealType.mealtype_id":mealId};
    }
    db.collection('mealType').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//List Of Restaurants wrt to Meal
//http://localhost:9500/meal?cuisineId=1 or
//http://localhost:9500/meal?mealId=1
app.get('/meal', (req, res) => {
    let mealId=Number(req.query.mealId);
    let cuisineId=Number(req.query.cuisineId);
    let query={}
    if(mealId){
        query={"mealType.mealtype_id":mealId}
    }else if(cuisineId){
        query={"cuisineType.cuisine_id":cuisineId}
    }
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//filter on basis of meal+state
//http://localhost:9500/filter?stateId=2&mealId=1
app.get('/filter', (req, res) => {
    let mealId=Number(req.query.mealId);
    let stateId=Number(req.query.stateId);
    let query={}
    if(stateId && mealId){
        query={state_id:stateId,"mealType.mealtype_id":mealId };
    }
    
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
////filter on basis of meal+cuisine
//http://localhost:9500/mealcuisine?cuisineId=6&mealId=2
app.get('/mealcuisine', (req, res) => {
    let mealId=Number(req.query.mealId);
    let cuisineId=Number(req.query.cuisineId);
    let query={}
    if(cuisineId && mealId){
        query={"cuisineType.cuisine_id":cuisineId,"mealType.mealtype_id":mealId };
    }
    
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
  ///or (another way)filter on basis of meal+cuisine
  //http://localhost:9500/mealcuisine1/2?cuisineId=6
  app.get('/mealcuisine1/:mealId', (req, res) => {
    let mealId=Number(req.params.mealId);
    let cuisineId=Number(req.query.cuisineId);
    let query={}
    if(cuisineId){
        query={"cuisineType.cuisine_id":cuisineId,"mealType.mealtype_id":mealId };
    }
    
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

////filter on basis of meal+cuisine+state
//http://localhost:9500/mealcuisinestate?stateId=2&cuisineId=6&mealId=2
app.get('/mealcuisinestate', (req, res) => {
    let mealId=Number(req.query.mealId);
    let cuisineId=Number(req.query.cuisineId);
    let stateId=Number(req.query.stateId);
    let query={}
    if(stateId && cuisineId && mealId){
        query={state_id:stateId,"cuisineType.cuisine_id":cuisineId,"mealType.mealtype_id":mealId };
    }
    
    db.collection('restaurants').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//filter on basis of low cost and high cost

app.get('/lhcost/:mealId', (req, res) => {
    let mealId=Number(req.params.mealId);
    let lcost=Number(req.query.lcost);
    let hcost=Number(req.query.hcost);
    let query={};
    if(  lcost && hcost){
        query={
            "mealType.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
    }
    }
    
    db.collection('menuList').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//details of Restaurants(using id for search)
//http://localhost:9500/details/63d4f621eecc96b30a91b3c0
app.get('/details/:restId', (req, res) => {
    let restId=mongo.ObjectId(req.params.restId);
    db.collection('restaurants').find({_id:restId}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})
//or details of Restaurants
//http://localhost:9500/detail/4
app.get('/detail/:restId', (req, res) => {
    let restId=Number(req.params.restId);
    db.collection('restaurants').find({restaurant_id:restId}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//Menu w.r.t Restaurant
//http://localhost:9500/menudetail/4
app.get('/menudetail/:restId', (req, res) => {
    let restId=Number(req.params.restId);
    db.collection('menuList').find({restaurant_id:restId}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//Menu details
//http://localhost:9500/menudetail/2
app.get('/menuDetail/:restId', (req, res) => {
    let restId=Number(req.params.restId);
    db.collection('menuList').find({restaurant_id:restId}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//place order(on postmon)
//http://localhost:9500/placeOrder 
app.post('/placeOrder',(req,res)=>{
    db.collection('order').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Order Placed!!');
    })
})

//view order(on postmon)
//http://localhost:9500/viewOrder
app.get('/viewOrder',(req,res)=>{
    db.collection('order').find().toArray((err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})

//menu user selected
//
app.post('/menuitem1',(req,res)=>{
    let menu=Array.isArray(req.body.id);
    let query={};
    if(menu){
        query={"menuItem.menu_id":{$in:req.body.id}};
        db.collection('order').find(query).toArray((err,result)=>{
        if(err)throw err;
        res.send(result);
    })
}else{
    res.send('Invalid Input')
}
})

//get order detail by email
//http://localhost:9500/vieworder?swapnil211@gmail.com
app.get('/vieworder',(req,res)=>{
    let email=req.query.email;
    let query={};
    if(email){
        query={email:email};
    }else{
        query={};
    }
 db.collection('order').find(query).toArray((err,result)=>{
    if(err)throw err;
    res.send(result);
 })
})

//update order
//http://localhost:9500/updateOrder/1 (use put in postmon)
//view order -->http://localhost:9500/viewOrder (use get in postmon)
app.put('/updateOrder/:id',(req,res)=>{
    let oid=Number(req.params.id);
    db.collection('order').updateOne(
        {order_id:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result)=>{
            if(err)throw err
            res.send('Order Updated!!')
        }
    )
})

//Delete order(using object id i.e _id)
//http://localhost:9500/deleteOrder/63d5f505906cf567f911cf1c
//view order-->http://localhost:9500/viewOrder
app.delete('/deleteOrder/:id',(req,res)=>{
    let _id=mongo.ObjectId(req.params.id);
    db.collection('order').remove({_id},(err,result)=>{
        if(err)throw err;
        res.send('Order deleted!!');
    })
})

//Delete order
//http://localhost:9500/deleteOrderOne/2
//view order-->http://localhost:9500/viewOrder
app.delete('/deleteOrderOne/:id',(req,res)=>{
    let id=Number(req.params.id);
    let query={};
    if(id){
        query={order_id:id};
    }
    db.collection('order').remove(query,(err,result)=>{
        if(err)throw err;
        res.send('Order deleted!!');
    })
})

//get users
//http://localhost:9500/Users
app.get('/Users', (req, res) => {
    db.collection('users').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

//register user
//http://localhost:9500/registerUser-->register user
//http://localhost:9500/users -->gives all users after new registration
app.post('/registerUser', (req, res) => {
    let hashPassword=bcrypt.hashSync(req.body.password,8);
    db.collection('users').insert({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    },(err,data)=>{
        if(err) res.send("Error While Register");
        res.send("Registration successful");
    })
})

//login user

app.post('/login', (req, res) => {
    db.collection('login').findOne({email:req.body.email},(err,register)=>{
        if(err) res.send({auth:false,token:"Error while login"});
        if(!register) res.send({auth:false,token:"No user found"})
        else{
            const passIsValid=bcrypt.compareSync(req.body.password,register.password);
            if(!passIsValid) res.send({auth:false,token:"Invalid password"});
            let token=jwt.sign({id:register._id},config.secret,{expiresIn:86400})
            res.send({auth:true,token:token})
        }
    })
})
MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, dc) => {
    if (err) console.log("Error while connecting");
    db = dc.db('devomato');
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    })
})


