import React, { useState, useEffect } from "react"
import "./App.css"
import WeatherPage from "./components/weatherPage"
import SearchForm from "./components/SearchForm"

function App() {
  // Initialize variables using "useSates"
  const [weatherData, setWeatherData] = useState([])

  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")

  // These hold values a little bit longer
  const [cityDisplayed, setCityDisplayed] = useState("")
  const [stateDisplayed, setStateDisplayed] = useState("")
  const [countryDisplayed, setCountryDisplayed] = useState("")

  // Create an object that will hold keys to be used in the fetch fnctions.
  const searchLatLon = {
    key: process.env.REACT_APP_GIPHY_KEY,
    cityName: city,
    stateCode: "",
    country: "",
    limit: 1,
    api: "https://api.openweathermap.org/geo/1.0/direct?q=",
  }

  let searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    api: "https://api.openweathermap.org/data/2.5/onecall?",
  }

  // Create handleChange function to capture input value for city from the form.
  function handleChangeCity(event) {
    setCity(event.target.value)
  }

  // Create handleChange function to capture input value for city from the form.
  function handleChangeState(event) {
    setState(event.target.value)
  }

  // Create handleChange function to capture input value for country from the form.
  function handleChangeCountry(event) {
    setCountry(event.target.value)
  }

  // Create a handleSubmit function to send the input value to the getLatLon function.
  function handleSubmit(event) {
    event.preventDefault()
    getLatLon(city, state, country)
    setCity("")
    setState("")
    setCountry("")
  }

  // useEffect function
  useEffect(() => {
    getLatLon()
    setCity("")
    setState("")
    setCountry("")
    // eslint-disable-next-line
  }, [])

  // This function below takes two parameters: city and country's code, and spits latitude and longitude out. Then, the next fetch takes the lat and lon, and spits eather data for eight days.

  function getLatLon(city, state, country) {
    fetch(
      `${searchLatLon.api}${city},${state},${country}&limit=${searchLatLon.limit}&appid=${searchLatLon.key}`
    )
      .then((result) => result.json())
      .then((data) => {
        // console.log(data[0])
        if (data[0]) {
          fetch(
            `${searchOptions.api}lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,hourly&appid=${searchOptions.key}&units=imperial`
          )
            .then((result) => result.json())
            .then((result) => {
              setCityDisplayed(data[0].name)
              setStateDisplayed(data[0].state)
              setCountryDisplayed(data[0].country)
              setWeatherData(result)
            })
        }
      })
  }

  return (
    <div className="bg-black">
      {/* Weather data */}
      <WeatherPage
        weatherData={weatherData}
        city={cityDisplayed}
        state={stateDisplayed}
        country={countryDisplayed}
      />

      {/* Search form */}
      <SearchForm
        city={city}
        state={state}
        country={country}
        handleChangeCity={handleChangeCity}
        handleChangeState={handleChangeState}
        handleChangeCountry={handleChangeCountry}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
