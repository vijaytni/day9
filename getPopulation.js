var XMLHttpRequest = require('xhr2');

var  request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);
 
request.send();
 
 
request.onload=function(){
    var data = JSON.parse(request.response);
    var result = data.filter(obj=>obj.population < 200000)
    console.log(result);
}
 