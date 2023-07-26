function WeatherSearchBar({ setPlace, place }) {
    const handleChange = (e) => {
        setPlace(e.target.value)
    }
    return (
        <>
            <input id="search-bar" placeholder="Search a city...." value={place} onChange={handleChange}></input>
        </>);
}

export default WeatherSearchBar;