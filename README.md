[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Weather

For this particular assignment, you will be given a mock up of a component for a Weather application and your goal is to copy the mock up to the best of your abilities and render the necessary information by utilizing the useEffect hook and other React concepts you have learned so far.

This assignment will help you practice how to make API calls in React, as well as HOW to navigate and read API documents, and parse data. 

By the end of it, your app should look similar to this:

![Final Logo](https://i.imgur.com/s6QHUlv.png)

## Prerequisites

- React

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Check out to a new branch with `git checkout -b dev`.
4. Install dependencies (`npm i` or `npm install`).
5. Fulfill the listed requirements.

## Requirements
1. App displays weather for one day.
2. App displays weather for today and next 4 days. (**There should be 5 boxes displaying data!**)

## Part 1: Retrieve Weather Data from OpenWeather API.

The first step of this is to go to https://openweathermap.org/api to Sign Up and Retrieve an API Key!

Once you receive an API key from the website, you will be prompted to wait a few hours before the API key is activated.
If you cannot retrieve an API key, let Ernest know and he will give you an API key to work with.

```https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly&appid={API key}```

This is the API end point you will be working with.
Google the longitude and latitudinal values for a location you desire to work with.
**You may hard code the values for `lat`, `long` and your `API key` for this challenge.**
**BONUS** if you can figure out how to use environment variables in React :)

[Click Here](https://openweathermap.org/current) for more information regarding the API call.

**COMMIT BEFORE PROCEEDING TO THE NEXT STEP**


## Part 2: Render the weather for today!

Once you retrieve the data, your next goal is to display the weather for today.

![img](https://i.imgur.com/8XHDM5e.png)

A WeatherBox should display the following:
- The Current Day.
- An icon representation of the weather ([Instructions on how to do that](https://openweathermap.org/weather-conditions))
- The maximum temperature for that day (in black).
- The minimum temperature for that day (in gray).


## Part 3: Display the weather for today and the next four days!

It would be much helpful if our app displays the weather for the entire week so our users can plan their events ahead in case they want to go outside :)
So let's do that! Instead of only displaying one, display the rest of the data from the `"daily"` field in the API call.

![img](https://i.imgur.com/5RFZfvs.png)

## SUBMISSION NOTES

Make sure you're committing and pushing everything in the `dev` branch!
When you're ready to submit and create a pull request, please also make sure you're making a **PULL REQUEST** from the `dev` branch.

**Thank you!**


## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
