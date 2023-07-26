import React from 'react'
import ReactDOM from 'react-dom/client'
import WeatherApp from './Components/WeatherApp.jsx'
import "./assets/css/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
)
