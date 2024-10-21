require("dotenv").config();
const freeclimbSDK = require("@freeclimb/sdk");

// your freeclimb API key (available in the Dashboard) - be sure to set up environment variables to store these values
const accountId = process.env.ACCOUNT_ID;
const apiKey = process.env.API_KEY;
const queueId = "your-queue-id";
const callId = "your-call-id";

const freeClimbConfig = freeclimbSDK.createConfiguration({
  accountId,
  apiKey,
});
const apiInstance = new freeclimbSDK.DefaultApi(freeClimbConfig);

apiInstance
  .getAMember(queueId, callId)
  .then((member) => {
    // Use the queue member
  })
  .catch((err) => {
    /** Catch Errors */
  });
