/**
 * This module is for interacting with the Google Civic Info API and normalize
 * the data that is returned from it.
 */

const request = require('request')

export default function getHouseRep(address) {
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

function extractHouseRep(body) {
  // 
}
