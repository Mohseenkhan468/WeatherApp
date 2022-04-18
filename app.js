// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 017e55c481361a054edbf69eca1a31ad

const weatherApi={
    key:"017e55c481361a054edbf69eca1a31ad",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox=document.getElementById('input');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
    document.querySelector('.weather-body').style.display='block';
    getWeatherReport(searchInputBox.value);
    }
});
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=matric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);
}
function showWeatherReport(weather){
    console.log(weather);
    let city=document.getElementById('city');
    city.innerHTML=`${weather.name},${weather.sys.country}`;
    let temp=document.getElementById('temp');
    temp.innerHTML=`${Math.round(weather.main.temp)/10}&deg;C`;
    let temp_minmax=document.getElementById('min-max');
    temp_minmax.innerHTML=`${Math.round(weather.main.temp_min)/10}&degC(min) / ${Math.round(weather.main.temp_max)/10}&degC(max)`;
    let weathertype=document.getElementById('weather');
    weathertype.innerHTML=`${weather.weather[0].main}`;
    let date=document.getElementById('date');
    let todaydate=new Date();
    date.innerHTML=`${todaydate.toLocaleDateString()}`;
//    if(weathertype.textContent=="Clouds"){
//        document.body.style.backgroundImage="url('./img/cloudy.jpg')";
//    }
switch(weathertype.textContent){
    case 'Clouds':document.body.style.backgroundImage="url('https://images.pexels.com/photos/1094846/pexels-photo-1094846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    break;
    case 'Clear':document.body.style.backgroundImage="url('https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?cs=srgb&dl=pexels-photomix-company-96622.jpg&fm=jpg')";
    break;
    case 'Haze':document.body.style.backgroundImage="url('https://images.pexels.com/photos/4558291/pexels-photo-4558291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')";
    break;
    case 'Rain':document.body.style.backgroundImage="url('https://images.pexels.com/photos/1530423/pexels-photo-1530423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    break;
    case 'Snow':document.body.style.backgroundImage="url('https://images.pexels.com/photos/751601/pexels-photo-751601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    break;
    case 'Sunny':document.body.style.backgroundImage="url('https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    break;
    case 'Thunderstorm':document.body.style.backgroundImage="url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg')";
    break;
    case 'Smoke':document.body.style.backgroundImage="url('https://images.pexels.com/photos/11728989/pexels-photo-11728989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    break;
}
}


