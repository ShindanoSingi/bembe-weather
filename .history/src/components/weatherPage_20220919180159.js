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

  // Tomorrow
  // eslint-disable-next-line
  let today2 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()

  // The day after tomorrow
  // eslint-disable-next-line
  let today3 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()

  // The following day
  // eslint-disable-next-line
  let today4 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()

  // The last day
  // eslint-disable-next-line
  let today5 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()

  // The last day
  // eslint-disable-next-line
  let today6 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()

  // The last day
  // eslint-disable-next-line
  let today7 = new Date(
    todayObject.setDate(todayObject.getDate() + 1)
  ).toUTCString()

  return weatherData.length < 1 ? (
    <div >
      <h1 className="py-2 text-xl text-center lg:text-4xl lg:py-4 md:py-4 xl:text-4xl xl:text-center md:text-4xl xl:py-4 3xl:text-4xl">Bembe-Weather App</h1>

      <div className="px-2 w-[98vw] mt-4 xl:p-4 md:p-4 lg:p-4 2xl:p-4 3xl:p-4 message mx-[1vw]">
        <strong className="md:text-3xl 3xl:text-3xl 2xl:text-3xl lg:text-3xl xl:text-3xl">For US City: </strong><span  className="md:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl lg:text-3xl">Enter the City, or City and State.</span><br></br>
        <strong  className="md:text-3xl xl:text-3xl 2xl:text-3xl 3xl:text-3xl lg:text-3xl">For Other Country's City: </strong><span  className="md:text-3xl 3xl:text-3xl xl:text-3xl 2xl:text-3xl lg:text-3xl">Enter City, or City and Country's Code.</span>
      </div>
      <br></br>
      <br />
      <br />
    </div>
  ) : (
    <div className="bodyContainer">
      {/* Display the city */}
      <div className="relative top-0 w-screen py-2 text-xl text-center xl:text-4xl xl:p-4 lg:p-4 lg:text-4xl 2xl:text-4xl 2xl:p-4 md:text-4xl md:py-3 3xl:text-4xl 3xl:p-3 cityStateCountry text-blue-50">
        {" "}
        {city}, {state}, {country}{" "}
      </div>

      <div className="flex h-[30.5rem] xs:h-[20.5rem] md:h-[36rem] 2xl:px-[19%] lg:px-4 lg:h-[50rem] xl:h-[30rem] 2xl:h-[70vh] 3xl:flex 3xl:items-center 3xl:px-[9rem] xl:flex xl:items-center 3xl:relative 3xl:top-16 3xl:w-[53vw]  xl:w-[98vw] mx-auto weatherContainer">
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
              <div key={index} className="fixed 2xl:h-[16rem] xl:h-[25rem] xl:w-[15rem] lg:fixed flex flex-col 2xl:left-[43%] 2xl:top-[5rem] xl:top-4 xl:left-0 items-center px-2 xl:flex xl:relative xl:justify-around lg:top-[6rem] py-1 left-[36%] h-[13rem] xs:left-[10%] xs:flex-row xs:h-[4.5rem] lg:left-[39%] lg:h-80 lg:w-48 xs:justify-baseline top-[3rem] md:left-[36vw] md:top-[4.5rem] md:w-[15rem] md:h-[18.5rem] place-content-center md:flex 3xl:left-0 3xl:top-[0rem] 3xl:h-[24rem] 2xl:w-[12rem] md:flex-col md:justify-around xs:w-[80vw] md:text-xl today1 3xl:relative 3xl:w-[13rem] 3xl:flex 3xl:justify-around">

                <p className="text-lg lg:text-4xl md:text-4xl single1 xl:text-4xl 2xl:text-3xl 3xl:text-3xl">{dayName}</p>
                <p className="text-sm md:text-3xl date1 xl:text-2xl lg:text-3xl 2xl:text-xl 3xl:text-2xl">
                  {month}/{dayDate}/{year}
                </p>


                <img
                  className="scale-100 icon1"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt=""
                />

                  <strong className="relative lg:text-4xl md:text-4xl xl:text-3xl currentTemp 2xl:text-2xl 3xl:text-3xl bottom-1">
                  {currentTempF}
                  <span>&#176;</span>
                </strong>

                <div className="relative flex items-center gap-4 md:gap-4 2xl:gap-4 3xl:text-2xl xl:text-2xl xl:gap-6 lg:text-3xl temp1">
                  <p className="maxTemp1 2xl:text-xl md:text-3xl">
                    {maxTempF}
                    <span>&#176;</span>
                  </p>
                  <p className="minTemp1 2xl:text-xl md:text-3xl">
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
                <div key={index} className="flex 3xl:w-[13rem] xl:h-[25rem] 2xl:relative 2xl:top-[55%] xl:w-[13rem] 2xl:h-[16rem] lg:h-80 3xl:h-[20rem] lg:w-48 md:w-[11.8rem] 2xl:w-[12rem] md:h-[18rem]  justify-around lg:relative lg:top-[28rem] xs:relative ml-1 flex-col items-center py-2 h-[13rem] xs:h-[10rem] xs:top-[10rem] 3xl:top-[0rem] md:relative md:top-[23.5rem] top-[17rem]  today2 w-[24%]  relative mx-auto">
                  <p className="text-lg singleDayH1 md:text-4xl xl:text-4xl lg:text-4xl 2xl:text-3xl 3xl:text-3xl">{dayName}</p>
                  <p className="text-sm date xl:text-2xl md:text-3xl lg:text-3xl 2xl:text-xl 3xl:text-2xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-100 icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex gap-4 3xl:text-2xl 2xl:text-xl xl:text-2xl xl:gap-8 temp lg:text-3xl md:text-3xl">
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
                  <div key={index} className="flex 3xl:h-[20rem] 3xl:text-3xl 2xl:h-[16rem] xl:h-[25rem] xl:w-[13rem] 2xl:w-[12rem] 2xl:relative 2xl:top-[55%] lg:relative lg:top-[28rem] lg:h-80 lg:w-48 md:w-[11.8rem] md:h-[18rem]  xs:h-[10rem] 3xl:w-[13rem] flex-col items-center h-[13rem] day justify-around py-2 md:text-3xl 3xl:top-[0rem]  xs:top-[10rem] md:relative md:top-[23.5rem] top-[17rem] today4 relative  mx-auto w-[24%]">
                  <p className="text-lg singleDayH1 xl:text-4xl md:text-4xl lg:text-4xl 2xl:text-3xl 3xl:text-3xl">{dayName}</p>
                  <p className="text-sm date md:text-3xl xl:text-2xl lg:text-3xl 2xl:text-xl 3xl:text-2xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-100 icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex gap-4 3xl:text-2xl 2xl:text-xl xl:text-2xl xl:gap-8 lg:text-3xl temp">
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
                <div key={index} className="flex 3xl:h-[20rem] 2xl:relative 2xl:top-[55%] 3xl:w-[13rem] 2xl:h-[16rem] xl:h-[25rem] xl:w-[13rem] 2xl:w-[12rem] lg:relative lg:top-[28rem] lg:h-80 3xl:top-[0rem]lg:w-48 md:w-[11.8rem] md:h-[18rem] 3xl:text-3xl xs:h-[10rem] flex-col items-center h-[13rem] day justify-around py-2 3xl:top-[0rem] md:text-3xl xs:top-[10rem] md:relative md:top-[23.5rem] top-[17rem] today4 relative  mx-auto w-[24%]">
                  <p className="text-lg singleDayH1 xl:text-4xl md:text-4xl lg:text-4xl 2xl:text-3xl 3xl:text-3xl">{dayName}</p>
                  <p className="text-sm date md:text-3xl xl:text-2xl lg:text-3xl 2xl:text-xl 3xl:text-2xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-100 icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex gap-4 3xl:text-2xl 2xl:text-xl xl:text-2xl xl:gap-8 lg:text-3xl temp">
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
                <div key={index} className="flex 3xl:h-[20rem] 3xl:w-[13rem] 2xl:relative 2xl:top-[55%] 2xl:h-[16rem] xl:h-[25rem] xl:w-[13rem] 2xl:w-[12rem] lg:h-80 lg:w-48 lg:relative lg:top-[28rem]  md:w-[11.8rem] md:h-[18rem] 3xl:text-3xl justify-around xs:h-[10rem] flex-col items-center day py-2 h-[13rem] md:text-3xl 3xl:top-[0rem] xs:top-[10rem] md:relative md:top-[23.5rem] top-[17rem] today5 w-[24%] mr-1 relative">
                  <p className="text-lg xl:text-4xl singleDayH1 md:text-4xl lg:text-4xl 3xl:text-3xl 2xl:text-3xl">{dayName}</p>
                  <p className="text-sm date xl:text-2xl md:text-3xl lg:text-3xl 2xl:text-xl 3xl:text-2xl">
                    {month}/{dayDate}/{year}
                  </p>

                  <img
                    className="scale-100 icon"
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt=""
                  />

                  <div className="flex gap-4 3xl:text-2xl 2xl:text-xl lg:text-3xl xl:text-2xl xl:gap-8 temp">
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
          } return '';
        }
          )
          }
      </div>
    </div>
  )
}

export default WeatherPage
