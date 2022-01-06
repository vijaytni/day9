var XMLHttpRequest = require('xhr2');

var  request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);
 
request.send();
 
request.onload=function(){
    var data=JSON.parse(request.response);
    var res=data.filter(obj=>obj.region=="Asia");
    console.log(res)
}