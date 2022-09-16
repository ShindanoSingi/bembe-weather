import React from "react"

const WeatherPage = ({ city, state, country, weatherData }) => {
  console.log("this is weather")
  console.log(weatherData)

  let weekDays = weatherData.daily

  console.log("this is weekDays")
  console.log(weekDays)

  let todayObject = new Date()
  // eslint-disable-next-line
  // Today
  // eslint-disable-next-line
  let today1 = todayObject.toString().substring(0, 3)

  // Tomorrow
  // eslint-disable-next-line
  let today0 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today0 = today0.toString().substring(0, 3)

  // Tomorrow
  // eslint-disable-next-line
  let today2 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today2 = today2.toString().substring(0, 3)

  // The day after tomorrow
  // eslint-disable-next-line
  let today3 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today3 = today3.toString().substring(0, 3)

  // The following day
  // eslint-disable-next-line
  let today4 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today4 = today4.toString().substring(0, 3)

  // The last day
  // eslint-disable-next-line
  let today5 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today5 = today5.toString().substring(0, 3)

  // The last day
  // eslint-disable-next-line
  let today6 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today6 = today6.toString().substring(0, 3)

  // The last day
  // eslint-disable-next-line
  let today7 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()
  today7 = today7.toString().substring(0, 3)

  return weatherData.length < 1 ? (
    <div>
      <h1 className="text-xl text-center">Bembe-Weather App</h1>

      <div className="px-2 mx-2 mt-2 message">
        <strong>For US City: </strong><span>Enter the City, or City and State.</span><br></br>
        <strong>For Other Country's City: </strong><span>Enter City, or City and Country's Code.</span>
      </div>
      <br></br>
      <br />
      <br />
    </div>
  ) : (
    <div className="bodyContainer">
      {/* Display the city */}
      <div className="cityStateCountry">
        {" "}
        {city}, {state}, {country}{" "}
      </div>

      <div className="weatherContainer">
        {weekDays.map((day, index) => {
          const dayAndDate = new Date(day.dt * 1000).toUTCString()
          console.log(dayAndDate)

          // Retrieve specific information from the day.
          const dayName = dayAndDate.substring(0, 3)
          const month = new Date(day.dt * 1000).getMonth() + 1
          const dayDate = dayAndDate.substring(5, 7)
          const year = dayAndDate.substring(12, 16)

          // Temperature conversion from Kelvin degrees to Fahrenheit degrees
          // Min temp
          let minTempF = parseInt(day.temp.min)

          // Max temp
          let maxTempF = parseInt(day.temp.max)

          //Current temperature
          let currentTempF = parseInt(weatherData.current.temp)

          // return one day/today
          if (index === 0 && index !== 7) {
            console.log(index)
            return (
              <div>
                <div key={index} className="today1">
                  <p className="single1">{dayName}</p>
                  <p className="date1">
                    {month}/{dayDate}/{year}
                  </p>

                <img
                  className="icon1"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                <p className="currentTemp">
                  {currentTempF}
                  <span>&#176;</span>
                </p>

                <div className="temp1">
                  <p className="maxTemp1">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp1">
                    {minTempF}
                    <span>&#176;</span>
                  </p>
                </div>
              </div>
                )
              </div>

          } else if (index === 1) {
            return (
              <div key={index} className="today2">
                <p className="singleDayH1">{dayName}</p>
                <p className="date">
                  {month}/{dayDate}/{year}
                </p>

                <img
                  className="icon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                <div className="temp">
                  <p className="maxTemp">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp">
                    {minTempF}
                    <span>&#176;</span>
                  </p>
                </div>
              </div>
            )
          } else if (index === 2) {
            return (
              <div key={index} className="today3">
                <p className="singleDayH1">{dayName}</p>
                <p className="date">
                  {month}/{dayDate}/{year}
                </p>

                <img
                  className="icon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                <div className="temp">
                  <p className="maxTemp">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp">
                    {minTempF}
                    <span>&#176;</span>
                  </p>
                </div>
              </div>
            )
          } else if (index === 3) {
            return (
              <div key={index} className="today4">
                <p className="singleDayH1">{dayName}</p>
                <p className="date">
                  {month}/{dayDate}/{year}
                </p>

                <img
                  className="icon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                <div className="temp">
                  <p className="maxTemp">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp">
                    {minTempF}
                    <span>&#176;</span>
                  </p>
                </div>
              </div>
            )
          } else if (index === 4) {
            return (
              <div key={index} className="today5">
                <p className="singleDayH1">{dayName}</p>
                <p className="date">
                  {month}/{dayDate}/{year}
                </p>

                <img
                  className="icon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                <div className="temp">
                  <p className="maxTemp">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp">
                    {minTempF}
                    <span>&#176;</span>
                  </p>
                </div>
              </div>
            )
          }
        }
        )
        }
      </div>
    </div>
  )
}

export default WeatherPage
