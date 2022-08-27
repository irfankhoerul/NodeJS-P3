// const request = require('request')
// const url =
//     'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
// request({ url: url }, (error, response) => {
//     // Parse the response body from JSON string into JavaScript object
//     const data = JSON.parse(response.body)
//     // Will print the current temperature to the console
//     console.log(data.currently.temperature)
// })

/**
 * Lesson 5
 */
// const request = require('request')
// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233';
// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' +
//         response.body.currently.temperature + ' degrees out. There is a ' +
//         response.body.currently.precipProbability + '% chance of rain.')
// })


/**
 * Lesson 7
 */
// const request = require('request')
// const geocodeURL =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token = pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw & limit=1'
// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

/**
 * Lesson 8
 * callback function
 */
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }
// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

/**
 * Lesson 9
 */
// const geocode = require('utils/geocode')
// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

/**
 * Lesson 11
 */
// Other lines hidden for brevity
// geocode(address, (error, data) => {
//     if (error) {
//         return console.log(error)
//     }
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//         }
//         console.log(data.location)
//         console.log(forecastData)
//     })
// })


/**
 * dengan API lain
 */
 const request = require('request')
 const i = 0
 const url =
     'https://staging-api-forum-app-laravel.herokuapp.com/api/forums'
 request({ url: url, json: true }, (error, response) => {
     response.body.data.forEach(element => {
         console.log(`${element.title} | Forum ke ${i}`)
     });
 })