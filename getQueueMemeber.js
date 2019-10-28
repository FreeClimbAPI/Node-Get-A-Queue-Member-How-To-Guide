require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeclimb = freeclimbSDK(accountId, authToken)

// Invoke get Queue Member call
freeclimb.api.queues.members(queueId).get(callId).then(member => {
  // Use the queue member
}).catch(err => {/** Catch Errors */ })