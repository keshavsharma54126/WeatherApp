//data
//variable to store the element
//function to get the data from the weather app
//Manipulate the variable of already created element with

let data;

const inputBox=document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");

const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");


const getData= async (event)=>{
    event.preventDefault();
    if(!inputBox.value){
        alert("pleae enter the city name");
        return;
    }
      const city=inputBox.value;  
    //fetch details
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=447c2add95704c6fb57172957232704&q=${city}`);
    const orgData = await fetchData.json();
    data=orgData;
    console.log(data);

    countryName.innerHTML=data.location.country;
    stateName.innerHTML=data.location.region;
    cityName.innerHTML=data.location.name;
    humidity.innerHTML=data.current.humidity;
    windSpeed.innerText=data.current.wind_kph ;
    temperature.innerText=data.current.temp_c ;
    weatherStatus.innerHTML=data.current.condition.text;
    logoImage.src=data.current.condition.icon;



}
