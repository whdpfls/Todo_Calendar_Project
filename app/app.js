
//모듈
const express = require("express"); //nodejs Express 사용
const app = express();  

//라우팅
const home = require("./src/routes/home"); //라우팅은 해당 디렉토리에서

//앱 세팅
app.set("views", "./src/views"); 
app.set("view engine", "ejs"); //view engine은 ejs를 사용한다


app.use(express.static(`${__dirname}/src/public`));

app.use(express.json()); //json 데이터 이해를 위해서 필요함
app.use(express.urlencoded({extended:true})); //URL을 통해 전달되는 데이터에 한글, 공백과 같은 문자가 포함될 때 제대로 전달되지 않는 것 해결

app.use("/", home); //use -> 미들웨어 등록 메서드; 가장 밑에 써줘야 함!!
module.exports = app;
