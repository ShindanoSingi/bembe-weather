import React from 'react'
import SearchForm from './SearchForm'


const WeatherPage = ({ city, state, country, weatherData }) => {
    console.log('this is weather')
    console.log(weatherData)

    let weekDays = weatherData.daily

    console.log('this is weekDays')
    console.log(weekDays)

    let todayObject = new Date()

    // Today
    let today1 = todayObject.toString().substring(0, 3)

    // Tomorrow
    let today0 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today0 = today0.toString().substring(0, 3)

    // Tomorrow
    let today2 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today2 = today2.toString().substring(0, 3)

    // The day after tomorrow
    let today3 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today3 = today3.toString().substring(0, 3)

    // The following day
    let today4 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today4 = today4.toString().substring(0, 3)

    // The last day
    let today5 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today5 = today5.toString().substring(0, 3)

    // The last day
    let today6 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today6 = today6.toString().substring(0, 3)

    // The last day
    let today7 = new Date(
    todayObject.setDate(todayObject.getDate() + 1),
    ).toUTCString()
    today7 = today7.toString().substring(0, 3)

    console.log('today 0' + today0)
    console.log('today 1' + today1)
    console.log('today 2' + today2)
    console.log('today 3' + today3)
    console.log('today 4' + today4)
    console.log('today 5' + today5)
    console.log('today 6' + today6)
    console.log('today 7' + today7)

    return weatherData.length < 1 ? (
        <div>
            <h1>Bembe-Weather App</h1>

            <div className="message">
            <p className="loading">
                For US City: Enter the City, or City and State. For Other Country's City:
                Enter City, or City and Country's Code.
            </p>
        </div>
        <br></br><br/><br/>
        </div>

    ) : (
        <div className="bodyContainer">
        {/* Display the city */}
        <div className="cityStateCountry">
        {' '}
        {city}, {state}, {country}{' '}
        </div>

        <div className="weatherContainer">
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
            })}
        </div>
        </div>
    )
    }

export default WeatherPage
