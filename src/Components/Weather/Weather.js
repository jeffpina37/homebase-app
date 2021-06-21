import React, {useState} from 'react';
import './weather.css'



const api = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: "https://api.openweathermap.org/data/2.5/"

}

  
export const Weather = () => {

        const [query, setQuery] = useState('');
        const [weather, setWeather] = useState({});
     
        const searchWeather = e => {
          if (e.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
              .then(res => res.json())
              .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
              });
          }
        }
     
        const dateBuilder = d => {
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     
          let day = days[d.getDay()];
          let date = d.getDate();
          let month = months[d.getMonth()];
          let year = d.getFullYear();
     
          return `${day} ${month} ${date} ${year}`
        }

    return (
     
         <body className='main'>
            <section class="glass">
              <div class="dashboard"> 
                                <div className='header-container'>
                                        <div className='h1'>
                                            <h1>Weather</h1>
                                        </div>
                                        <div >
                                            <input
                                            type='text'
                                            className='search-bar'
                                            placeholder='Enter a city...'
                                            onChange={e => setQuery(e.target.value)}
                                            value={query}
                                            onKeyPress={searchWeather}
                                            id='press'
                                            />
                                        </div>
                                </div>
                                {(typeof weather.main !== "undefined") ? (
                                <div className='body-container'>
                                    <div className='card'>           
                                            <div className='card-inner'>
                                                <h2 className='location'>{weather.name}, {weather.sys.country}</h2>
                                                <h2>{dateBuilder(new Date())}</h2>
                                                <h3>{weather.weather[0].main}</h3>
                                                <h2>{Math.round(weather.main.temp)}°F</h2> 
                                            </div>
                                            <div className='high-low'>
                                                <div id='high-low'>
                                                    <h3><strong>High°</strong></h3> 
                                                    <h3>{Math.round(weather.main.temp_max)}°F</h3>                                            
                                                </div> 
                                                <div id='high-low'>                                
                                                    <h3><strong>Low°</strong></h3> 
                                                    <h3>{Math.round(weather.main.temp_min)}°F</h3>
                                                </div> 
                                            </div>  
                                    </div>
                                    
                                    <div className='card'>
                                            <div className='info-box'>
                                                <div className='detail-inner'>
                                                    <h4>SUNRISE</h4>
                                                    <h5>{weather.sys.sunrise}</h5>
                                                </div>
                                                <div className='detail-inner'>
                                                    <h4>SUNSET</h4>
                                                    <h5>{weather.sys.sunset}</h5>
                                                </div>
                                                <div className='detail-inner'>
                                                    <h4>HUMIDITY</h4>
                                                    <h5>{weather.main.humidity}%</h5>
                                                </div>
                                            </div>
                                            <div className='info-box'>
                                                <div className='detail-inner'>
                                                    <h4>WIND</h4>
                                                    <h5>{Math.round(weather.wind.speed)} MPH</h5>
                                                </div>
                                                <div className='detail-inner'>
                                                    <h4>FEELS LIKE</h4>
                                                    <h5>{Math.round(weather.main.feels_like)}°F</h5>
                                                </div>
                                                <div className='detail-inner'>
                                                    <h4>PRESSURE</h4>
                                                    <h5>{weather.main.pressure}</h5>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                
                            ) : ('')}
              </div> 
             </section>
      
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
        </body>
     
    )
  }
  
  
  
