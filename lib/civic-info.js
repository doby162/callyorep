/**
 * This module is for interacting with the Google Civic Info API and normalize
 * the data that is returned from it.
 */

const request = require('request')
const _ = require('lodash')

module.exports = {
  getHouseRep: (address) => {
    let key = process.env.GOOGLE_API_KEY
    let addres = address.replace(' ', '+')
    let urlBase = `https://www.googleapis.com/civicinfo/v2/representatives?`
    let query = `address=${address}&key=${key}`

    let url = `${urlBase}${query}`

    return new Promise((resolve, reject) => {
      request(url, (err, response, body) => {
        if (err) return reject(err)

        return resolve(extractHouseRep(body))
      })
    })
  }
}

function extractHouseRep(body) {
  let response = JSON.parse(body)

  let officialIndex = _.find(response.offices, (office) => {
    return isHouseRepOffice(office)
  }).officialIndices[0]

  return response.officials[officialIndex]
}

function isHouseRepOffice(office) {
  return (
    office.levels && office.levels[0] === 'country'
  ) && (
    office.roles && office.roles[0] === 'legislatorLowerBody'
  )
}
