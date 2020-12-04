 
   
   

 document.getElementById("run").addEventListener("click" , function(e){
  
  document.getElementById("forecast-result").style.display = "block";
  document.getElementById("forecast-result").style.display = "grid";


   


    
   // let myKeyYo='d0a4594c0ae5ecc3e5bef0322b50ca3f';
   let newKey='a2b7388f29884dbf91b6e25bf1e1c46f';
   let city=document.getElementById("city").value;
  //  let icon=document.getElementById("image");

  let forecastDiv= document.getElementById("forecast-result");

  let loc1=document.querySelector(".loc1");
  let temp1=document.querySelector(".temp1");
  let date1=document.querySelector(".date1");
  let des1=document.querySelector(".des1");
  
  let loc2=document.querySelector(".loc2");
  let temp2=document.querySelector(".temp2");
  let date2=document.querySelector(".date2");
  let des2=document.querySelector(".des2");

  let loc3=document.querySelector(".loc3");
  let temp3=document.querySelector(".temp3");
  let date3=document.querySelector(".date3");
  let des3=document.querySelector(".des3");

  let loc4=document.querySelector(".loc4");
  let temp4=document.querySelector(".temp4");
  let date4=document.querySelector(".date4");
  let des4=document.querySelector(".des4");

  let loc5=document.querySelector(".loc5");
  let temp5=document.querySelector(".temp5");
  let date5=document.querySelector(".date5");
  let des5=document.querySelector(".des5");


  












    e.preventDefault();//it solves the problem to show the console output.

    fetch(' https://api.weatherbit.io/v2.0/forecast/daily?city=' + city + 'NC&key=' + newKey)

    .then (response => response.json())
    .then((result) => {
    console.log(result);

      loc1.innerHTML=result.city_name;
      temp1.innerHTML=result.data[0].temp + '&deg;';
      date1.innerHTML=result.data[0].datetime + "<br>" + "Today";
      des1.innerHTML=result.data[0].weather.description;
      //includes method analyze the content!!
      if (result.data[0].weather.description.includes("clouds")){
        document.getElementById("firstimg").src="./icons/04d.png"
        document.getElementById("secondimg").src="./icons/04d.png"
        document.getElementById("thirdimg").src="./icons/04d.png"
        document.getElementById("fourthimg").src="./icons/04d.png"
        document.getElementById("fifthimg").src="./icons/04d.png"




      }
      

      loc2.innerHTML=result.city_name;
      temp2.innerHTML=result.data[1].temp + '&deg;';
      date2.innerHTML=result.data[1].datetime + "<br>"  + "Tomorrow";
      des2.innerHTML=result.data[1].weather.description;

      loc3.innerHTML=result.city_name;
      temp3.innerHTML=result.data[2].temp + '&deg;';
      date3.innerHTML=result.data[2].datetime;
      des3.innerHTML=result.data[2].weather.description;

      loc4.innerHTML=result.city_name;
      temp4.innerHTML=result.data[3].temp + '&deg;';
      date4.innerHTML=result.data[3].datetime;
      des4.innerHTML=result.data[3].weather.description;

      loc5.innerHTML=result.city_name;
      temp5.innerHTML=result.data[4].temp + '&deg;';
      date5.innerHTML=result.data[4].datetime;
      des5.innerHTML=result.data[4].weather.description;


          //below its to loop through 5 days.in this case for loop is not very necessary since we will display the 5 days on our webpage.
      
      // for (i = 0; i <  5; i++) {


      //   let descriptionDiv=document.createElement("div");
      //   descriptionDiv.id="description";
      //   descriptionDiv.class=""//look it up how to add with class attribute.
      //   descriptionDiv.innerHTML=result.data[i].weather.description;
        


      //   let tempH1Element=document.createElement("h1");
      //   tempH1Element.id="temp";
      //   tempH1Element.innerHTML=result.data[i].temp;
      //   tempH1Element.style = "display:flex ; flex-direction:column;";

      //   tempH1Element.style = " background-color: red;font-size:20px;"



      //   let locationDiv=document.createElement("div");
      //   locationDiv.id="location";
      //   locationDiv.innerHTML=result.city_name;



        

      //   forecastDiv.appendChild(locationDiv);
      //   forecastDiv.appendChild(tempH1Element);
      //   forecastDiv.appendChild(descriptionDiv);
        


      // }




      





    // var celcius = Math.round(parseFloat(result.data[0].temp)-273.15);
    // let celcius = result.data[0].temp;
    // let descripton=result.data[0].weather.description;
    // let date=result.data[0].datetime;
   
	  // document.getElementById('description').innerHTML = descripton;
 	  // document.getElementById('temp').innerHTML = celcius + '&deg;';
    // document.getElementById('location').innerHTML = result.city_name;
    // document.getElementById('date').innerHTML = date;


      
      })
   })


