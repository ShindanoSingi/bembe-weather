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
    <div >
      <h1 className="py-2 text-xl text-center">Bembe-Weather App</h1>

      <div className="px-2 w-[98vw] mt-4 message mx-[1vw]">
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
      <div className="fixed w-screen text-xl text-center cityStateCountry text-blue-50">
        {" "}
        {city}, {state}, {country}{" "}
      </div>

      <div className="flex h-[29.5rem] weatherContainer">
        {weekDays.map((day, index) => {
          // Source https://www.youtube.com/watch?v=nGVoHEZojiQ
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
              <div key={index} className="absolute flex flex-col items-center px-2 py-1 mx-auto left-[35%] h-[12.5rem] top-[3.5rem] place-content-center w-28 today1">
                <p className="relative single1 top-2">{dayName}</p>
                <p className="relative date1 top-2">
                  {month}/{dayDate}/{year}
                </p>

                <img
                  className="icon1"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                <p className="relative currentTemp bottom-1">
                  {currentTempF}
                  <span>&#176;</span>
                </p>

                <div className="relative flex gap-2 bottom-1 temp1">
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
          }

          else {
            if (index === 1) {
              return (
                <div key={index} className="flex ml-1 flex-col items-center py-2 h-[12rem] top-[16rem]  today2 w-[24%]  relative justify-center mx-auto">
                  <p className="singleDayH1">{dayName}</p>
                  <p className="date">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex temp">
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
                <div key={index} className="flex flex-col items-center h-[12rem] day py-1 top-[16rem] today3 relative justify-center mx-auto w-[24%]">
                  <p className="singleDayH1">{dayName}</p>
                  <p className="date">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex temp">
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
                <div key={index} className="flex flex-col items-center h-[12rem] day py-2 top-[16rem] today4 relative justify-center mx-auto w-[24%]">
                  <p className="singleDayH1">{dayName}</p>
                  <p className="date">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex temp">
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
                <div key={index} className="flex flex-col items-center day py-2 h-[12rem] top-[16rem] today5 w-[24%] mr-1 relative justify-center">
                  <p className="singleDayH1">{dayName}</p>
                  <p className="date">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex temp">
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

        }
        )
        }
      </div>
    </div>
  )
}

export default WeatherPage
