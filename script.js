 
   
   

 document.getElementById("run").addEventListener("click" , function(e){
    
   let myKeyYo='d0a4594c0ae5ecc3e5bef0322b50ca3f';
   // let fiveDaysApi='ab0fc368331f6a46d8fc92a4161838e9';
   let city=document.getElementById("city").value;
   let icon=document.getElementById("image");



    e.preventDefault();//it solves the problem to show the console output.

   // fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=' + fiveDaysApi)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + myKeyYo)

    .then (response => response.json())
    .then((data) => {console.log(data)

	
	var celcius = Math.round(parseFloat(data.main.temp)-273.15);
   console.log(celcius);
	
	document.getElementById('description').innerHTML = data.weather[0].description;
 	document.getElementById('temp').innerHTML = celcius + '&deg;';
   document.getElementById('location').innerHTML = data.name;
   // document.getElementById('latitute').innerHTML=data.lat;
   icon.src="./icons/" + data.weather[0].icon + ".png";
   console.log(icon);


    })
 })