import { useEffect, useState } from "react";
import WeatherSearchBar from "./WeatherSearchBar";
import WeatherIndividualInfo from "./WeatherIndividualInfo";
import CityItem from "./CityItem";
import WeatherNextDay from "./WeatherNextDay";

function WeatherApp() {
    const APIKEY = "ac37fb83c1c9488e81d181256232407"
    const [place, setPlace] = useState("") //Aca se guardan lo que el usuario va ingresando en la search bar
    const [places, setPlaces] = useState([]) // Aca se guardan los resultados de las diferentes busquedas a la Api con lo que escribe el usuario
    const [coordsPlaceSelected, setCoordsPlaceSelected] = useState(null) // Aca se guarda las coordenadas del lugar seleccionado por el usuario
    const [infoPlaceSelected, setInfoPlaceSelected] = useState([]) // Aca se guarda la info del clima del lugar seleccionado
    useEffect(() => {
        const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${place}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1cdc29d1fbmsh8c7f4b7d7ca48d8p1e78ddjsn2f86475e8467',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                setPlaces(json)
            })
            .catch(error => {
                let respuesta = `${error.status} ` + error.statusText || "Ha ocurrido un error"
                console.error(respuesta)
            })
    }, [place])

    useEffect(() => {
        {
            coordsPlaceSelected != null && fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${coordsPlaceSelected.latitude},${coordsPlaceSelected.longitude}&days=7`)
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .then(json => {
                    setPlace(`${coordsPlaceSelected.city} ${coordsPlaceSelected.country}`)
                    setPlaces([])
                    console.log(json)
                    setInfoPlaceSelected(json)
                })
                .catch(error => {
                    let respuesta = `${error.status} ` + error.statusText || "Ha ocurrido un error"
                    console.error(respuesta)
                })
        }

    }, [coordsPlaceSelected])

    const handleClick = (info) => {
        console.log(info)
        setCoordsPlaceSelected(info)
    }
    return (<>
        <h1 id="main-title">Weather App</h1>
        <span id="main-subtitle">Search whatever city that you want !!</span>
        <div id="container-app">
            <WeatherSearchBar setPlace={setPlace} place={place} />
            <div id="container-results">
                {places.length != 0 && places.data.map((place, index) => <CityItem key={index} place={place} handleClick={handleClick} />)}
            </div>
        </div >
        {infoPlaceSelected.length != 0 && <WeatherIndividualInfo infoPlaceSelected={infoPlaceSelected} />}
        {infoPlaceSelected.length != 0 &&
            <>
                <h2 id="main-title-nextday">Daily</h2>
                <div id="weather-nextday-container">
                    {infoPlaceSelected.forecast && infoPlaceSelected.forecast.forecastday.map((day) => <WeatherNextDay day={day} />)}
                </div>
            </>}
    </>);
}

export default WeatherApp;