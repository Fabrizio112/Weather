function WeatherIndividualInfo({ infoPlaceSelected }) {
    const { name, country, localtime } = infoPlaceSelected.location
    const { temp_c, feelslike_c, wind_kph, humidity } = infoPlaceSelected.current
    const { icon, text } = infoPlaceSelected.current.condition
    const temperature = Math.round(temp_c)
    return (
        <section id="weather-container">
            <aside id="weather-container-top">
                <div id="weather-container-top-left">
                    <h1>{name}, {country}</h1>
                    <span>{text}</span>
                </div>
                <div id="weather-container-top-rigth">
                    <img src={`https:${icon}`} alt="" />
                </div>
            </aside>
            <aside id="weather-container-bottom">
                <div id="weather-container-bottom-left">
                    <h2>{temperature}°C</h2>
                </div>
                <div id="weather-container-bottom-rigth">
                    <h3>Details:</h3>
                    <div>
                        <li>Feels Like</li><strong>{feelslike_c}°C</strong>
                    </div>
                    <div>
                        <li>Wind</li><strong>{wind_kph}km/h</strong>
                    </div>
                    <div>
                        <li>Humidity</li><strong>{humidity}%</strong>
                    </div>
                    <li id="time">{localtime}</li>

                </div>
            </aside>
        </section>);
}

export default WeatherIndividualInfo;