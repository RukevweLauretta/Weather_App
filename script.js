    const apiKey = "74563c0672fa9a26606cdfe63b281480"
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.getElementById("searchElement");
    const btn = document.getElementById("btn");
    const weatherIcon=document.getElementById('center-image')
    const forecast=document.getElementById('forecast')

      
  
    async function checkWeather(city){
            const response = await fetch(url + city +`&appid=${apiKey}`);

            if(response.status == 404){
                alert('Please enter a valid location')
            }else if(searchBox.value == ''){
                alert('You must enter a location')
                
            }else{

            var data = await response.json();

          

            document.getElementById("city").innerHTML= data.name;
            document.getElementById("temperature").innerHTML= Math.round(data.main.temp)+ "°C";
            document.getElementById("description").innerHTML= data.weather[0].description.toUpperCase();
            document.getElementById("humidity").innerHTML= data.main.humidity + "%";
            document.getElementById("wind").innerHTML= data.wind.speed + " km/h";


            if(data.weather[0].main == 'Clouds'){
                weatherIcon.src="img/cloudy.png";

            }else if(data.weather[0].main == 'Rain'){
                weatherIcon.src="img/thunderstorm.png";

            }else if(data.weather[0].main == 'Clear'){
                weatherIcon.src="img/sunny.png";
            
            }else if(data.weather[0].main == 'Snow'){
                weatherIcon.src="img/rainy.png";}

       
  
        }}
    
        btn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
            })
