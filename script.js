const options = {
  method: "GET",
  
};
const getweather=(city)=>{
	cityName.innerHTML=city;
fetch(
  `http://api.weatherstack.com/current?access_key=2314fcf83935826dbcc4ec935fb108a2&query=${city}`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
	
	temperature.innerHTML=response.current.temperature;
    cloudcover.innerHTML = response.current.cloudcover;
    feelslike.innerHTML = response.current.feelslike;
    humidity.innerHTML = response.current.humidity;

    pressure.innerHTML = response.current.pressure;
    visibility.innerHTML = response.current.visibility;
    
    wind_dir.innerHTML=response.current.wind_dir;
    wind_degrees.innerHTML = response.current.wind_degree;
    wind_speed.innerHTML = response.current.wind_speed;
  

  })
  .catch((err) => console.error(err));
}
submit.addEventListener('click',(e)=>{
	e.preventDefault()
	getweather(city.value)
})
getweather("kullu")