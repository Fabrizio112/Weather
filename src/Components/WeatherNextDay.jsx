function WeatherNextDay({ day }) {
    const { date } = day
    const { maxtemp_c, mintemp_c } = day.day
    const { icon, text } = day.day.condition
    function days_week(a) {
        switch (a) {
            case "Mon":
                return "Monday";
            case "Tue":
                return "Tuesday";
            case "Wed":
                return "Wednesday";
            case "Thu":
                return "Thursday";
            case "Fri":
                return "Friday";
            case "Sat":
                return "Saturday";
            case "Sun":
                return "Sunday";


            default:
                break;
        }
    }
    let dateNormal = new Date(date).toGMTString().slice(0, 3)
    let dateModified = days_week(dateNormal)
    return (
        <section id="nextDay-weather">
            <div id="nextDay-weather-left">
                <img src={`https:${icon}`} alt={text} />
                <span>{dateModified}</span>
            </div>
            <div id="nextDay-weather-right">
                <h4>{text}</h4>
                <span>{maxtemp_c}°C / {mintemp_c}°C</span>
            </div>
        </section>);
}

export default WeatherNextDay;