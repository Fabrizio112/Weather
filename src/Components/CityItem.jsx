function CityItem({ place, handleClick }) {
    const { city, country, latitude, longitude } = place
    const info = { latitude, longitude, city, country }
    return (<li onClick={() => handleClick(info)}>{city} {country}</li>);
}

export default CityItem;