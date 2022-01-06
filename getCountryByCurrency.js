var XMLHttpRequest = require('xhr2');

var  request= new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);
 
request.send();
request.onload=function(){
  var data=JSON.parse(request.response);
  var countrybyCurreny=data.filter(obj=>{
      console.log(obj.currencies);
      if (obj.currencies != null) {
        console.log(Object.keys(obj.currencies)); // get array of keys);
      }
      // console.log(obj.currencies.name);

      // for(i=0;i<obj.currencies.length;i++){
      //    if( obj.currencies[i].code=="USD"){
      //        return true;
      //    }
      // }
  });
  country=countrybyCurreny.map(ele=>{
  return ele.name
  })
  console.log(country);
}