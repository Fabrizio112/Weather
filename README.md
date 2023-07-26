# Weather app maked with React

In this proyect was used hooks like **useState,useEffect** and technologies like **HTML,CSS,Javascript,React,Sass**

**_This proyect was built with the purpose of practising React_**

<p align="center">
<img src="./public/clouds-sky.gif" alt="Cloudy day">
</p>

## How i thought about the project and its functioning

**_Main Idea: Weather app that when user searchs anywhere in the world can be know it weather_**

Note: Already I have a same project but it was built in Vanilla Javascript , so i took a lot of ideas for this project

APIs used in this project:
- Places : [GeoDb Cities Api](https://rapidapi.com/wirefreethought/api/geodb-cities/)
- Weather: [WeatherApi](https://www.weatherapi.com/)

My idea was when user searchs in search bar whatever place in the entire world ,can selects any and when user selects it the app will render the actual weather and weather in the next days

So, I maked a Search bar .When user writes any character into it , it will be store in a state called "Place".It state is linked with a useEffect ,so with the info contained into "Place" a request will be make to the **GeoDb Api** and the information that will come in the response ,will store in the State "Places"

With the information contained in "Places" State , The app will render a "City Item",each contains name and country of the place.All of these "City Item" will make a list

When user clicks any "City Item",it´s coordinates are extracted from it and stores in a State called "coordsPlaceSelected".

An useEffect is watching for changes in the State "coordsPlaceSelected" ,so when user fills this state, be will make a request to the **Weather Api** with the information contained into the coords(Latitude and Longitude). The information that will come in the response, will store in the State "infoPlaceSelected"

With the information contained into the state "infoPlaceSelected", will be render "Weather Individual Info Card" and "Weather Next Days Card"

For the Styles ,another time i used SASS .Because i feel so confortable with it