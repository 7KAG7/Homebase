





/*large circle
triangle in the direction of the wind with number for speed inside
import information
other current data in circle*/
  var tempData;
  var humidData;
  var pollenCount;
  var dewPointData;           
  var zipInput;
  var api = "https://fcc-weather-api.glitch.me/api/current?lat=42.214576&lon=-71.658255";

                  
 $.getJSON(api, function(data){
    //JSON call for api 
    var tempData = (data.main.temp*(9/5)+32).toFixed(1);
    var humidData = (data.main.humidity);
    var humidData = (data.main.humidity);
                    
    $("#tempData").html(tempData + " &#8457" );
    $("#humidData").html(humidData + " %");
     

 });
 
    