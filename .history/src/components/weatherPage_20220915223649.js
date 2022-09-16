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
      <h1 className="py-2 text-xl text-center md:py-4 md:text-4xl">Bembe-Weather App</h1>

      <div className="px-2 w-[98vw] mt-4 md:p-4 message mx-[1vw]">
        <strong className="md:text-3xl">For US City: </strong><span  className="md:text-3xl">Enter the City, or City and State.</span><br></br>
        <strong  className="md:text-3xl">For Other Country's City: </strong><span  className="md:text-3xl">Enter City, or City and Country's Code.</span>
      </div>
      <br></br>
      <br />
      <br />
    </div>
  ) : (
    <div className="bodyContainer">
      {/* Display the city */}
      <div className="fixed top-0 w-screen text-xl text-center md:text-4xl md:py-3 cityStateCountry text-blue-50">
        {" "}
        {city}, {state}, {country}{" "}
      </div>

      <div className="flex h-[30.5rem] xs:h-[20.5rem] weatherContainer">
        {weekDays.map((day, index) => {
          // Source https://www.youtube.com/watch?v=nGVoHEZojiQ
          const dayAndDate = new Date(day.dt * 1000).toUTCString()
          console.log(dayAndDate)

          // Retrieve specific information from the day.
          const dayName = dayAndDate.substring(0, 3)
          const month = new Date(day.dt * 1000).getMonth() + 1
          const dayDate = dayAndDate.substring(5, 7)
          const year = dayAndDate.substring(13, 16)

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
              <div key={index} className="fixed flex flex-col items-center px-2 py-1 left-[33%] h-[13rem] xs:left-[10%] xs:flex-row xs:h-[4.5rem] xs:justify-baseline top-[3rem] md:top-[4.5rem] md:w-[11.8rem] md:h-[18rem] place-content-center xs:w-[80vw] md:text-xl today1">
                <div className="flex flex-col items-center xs:flex xs:items-center xs:flex-col">
                  <p className="relative text-lg md:text-4xl single1 ">{dayName}</p>
                <p className="relative text-sm md:text-3xl date1 ">
                  {month}/{dayDate}/{year}
                </p>
                </div>


                <img
                  className="scale-150 icon1"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />
                <div className="flex flex-col items-center xs:flex xs:flex-col">
                  <p className="relative md:text-3xl currentTemp bottom-1">
                  {currentTempF}
                  <span>&#176;</span>
                </p>

                <div className="relative flex items-center gap-2 temp1">
                  <p className="maxTemp1 md:text-3xl">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp1 md:text-3xl">
                    {minTempF}
                    <span>&#176;</span>
                  </p>
                </div>
                </div>

              </div>
            )
          }

          else {
            if (index === 1) {
              return (
                <div key={index} className="flex md:w-[11.8rem] md:h-[18rem]  justify-around xs:relative ml-1 flex-col items-center py-2 h-[13rem] xs:h-[10rem] xs:top-[10rem] md:relative md:top-[23.5rem] top-[17rem]  today2 w-[24%]  relative mx-auto">
                  <p className="text-lg singleDayH1 md:text-4xl">{dayName}</p>
                  <p className="text-sm date md:text-3xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-150 icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex temp md:text-3xl">
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
                <div key={index} className="flex md:w-[11.8rem] md:h-[18rem]  xs:h-[10rem] justify-around flex-col items-center h-[13rem] day py-1 xs:top-[10rem] top-[17rem] md:relative md:top-[23.5rem] today3 relative mx-auto md:text-3xl w-[24%]">
                  <p className="text-lg singleDayH1 md:text-4xl">{dayName}</p>
                  <p className="text-sm date md:text-3xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-150 icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex temp md:text-3xl">
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
                <div key={index} className="flex md:w-[11.8rem] md:h-[18rem]  xs:h-[10rem] flex-col items-center h-[13rem] day justify-around py-2 md:text-3xl xs:top-[10rem] md:relative md:top-[23.5rem] top-[17rem] today4 relative  mx-auto w-[24%]">
                  <p className="text-lg singleDayH1 md:text-4xl">{dayName}</p>
                  <p className="text-sm date md:text-3xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-150 icon"
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
                <div key={index} className="flex md:w-[11.8rem] md:h-[18rem]  justify-around xs:h-[10rem] flex-col items-center day py-2 h-[13rem] md:text-3xl xs:top-[10rem] md:relative md:top-[23.5rem] top-[17rem] today5 w-[24%] mr-1 relative">
                  <p className="text-lg singleDayH1 md:text-4xl">{dayName}</p>
                  <p className="text-sm date md:text-3xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-150 icon md:text-3xl"
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
