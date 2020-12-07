# Node - Get a Queue Tutorial

This project serves as a guide to help you build an application with FreeClimb. View this tutorial on [FreeClimb.com](https://docs.freeclimb.com/docs/get-queue-member#section-nodejs). Specifically, the project will:

- Get a member of a queue

## Setting up your new app within your FreeClimb account

To get started using a FreeClimb account, follow the instructions [here](https://docs.freeclimb.com/docs/getting-started-with-freeclimb).

## Setting up the Tutorial

1. Install the node packages necessary using command:

   ```bash
   $ yarn install
   ```

2. Configure environment variables (this tutorial uses the [dotenv package](https://www.npmjs.com/package/dotenv)).

   | ENV VARIABLE            | DESCRIPTION                                                                                                                                                                             |
   | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | ACCOUNT_ID              | Account ID which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                                         |
   | AUTH_TOKEN              | Authentication Token which can be found under [API Keys](https://www.freeclimb.com/dashboard/portal/account/authentication) in Dashboard                                               |

3. Provide a value for the variables `queueuId` and `callId`. More about queues can be found [here](https://docs.freeclimb.com/reference/queues-1) and more about calls can be found [here](https://docs.freeclimb.com/reference/calls-1)

## Runnning the Tutorial

1. Run the application using command:

   ```bash
   $ node getQueueMember.js
   ```

## Getting Help

If you are experiencing difficulties, [contact support](https://freeclimb.com/support).
