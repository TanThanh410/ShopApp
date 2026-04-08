/**
npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avatar:string,phone:integer,created_at:date,update_at:date 
npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name Category --attributes name:string,image:text

npx sequelize-cli model:generate --name Brand --attributes name:string,image:text 

npx sequelize-cli model:generate --name News  --attributes title:string,image:text,content:text

npx sequelize-cli model:generate --name Banner --attributes name:string,image:text,status:integer

  npx sequelize-cli model:generate --name Order --attributes user_id:integer,status:integer,note:text,total:integer

  npx sequelize-cli model:generate --name Product --attributes name:string,price:integer,oldprice:integer,image:text,description:text,specification:text,buyturn:integer,quantity:integer,brand_id:integer,category_id:integer
 
  npx sequelize-cli  model:generate --name OrderDetail --attributes order_id:integer,product_id:integer,price:integer,quantity:integer

  npx sequelize-cli model:generate --name BannerDetail --attributes product_id:integer,banner_id:integer
 
 npx sequelize-cli model:generate --name Feedback --attributes product_id:integer,user_id:integer,star:integer,content:text

  npx sequelize_cli model:generate --name NewsDetail --attributes product_id:integer,news_id:integer

 SELECT * FROM information_schema.tables_constraints 
 WHERE table_schema = 'shopapp_online' AND table_name = 'orders';
  */

//const express = require('express')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const { AppRoute } = require('./AppRoute')
app.get('/', (req, res) => {
  res.send('This is my shop app! Hello Wordl 11')
})

const port = process?.env?.PORT ?? 3000;
AppRoute(app)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})  
