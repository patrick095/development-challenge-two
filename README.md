<<<<<<< HEAD

# Codes to run in docker
## Torun the project use this code:
docker-compose up -d
<br />

## front-end running on port 3000
## back-end running on port 3001
=======
# Codes to run in local machine
- clone this repository to your pc
- Install node modules with 'yarn install'
- yarn dev (development mode back-end + front-end)
- yarn build && yarn start (production mode)

*⚠️*  - *In this project i'm using postgres from Docker, to configure other db open api/src/config and configure ORMConfig.ts*

# Codes to run in docker
## To install modules and run in production:
docker-compose -f docker-compose.yml -f install-modules.yml -f production.yml up -d
<br />

## To install modules on Docker:
 docker-compose -f docker-compose.yml -f install-modules.yml up -d   
<br />

## To start in development mode on Docker:
 docker-compose up -d
<br />

## To start in production mode without install modules on Docker:
 docker-compose -f docker-compose.yml -f production.yml up -d

 <br />

## *front-end running on port* 3000
## *back-end running on port* 3001
>>>>>>> a076857b59879b5456302d10f5f8df35f1f72d67
<br />

# Development challenge

Medcloud's challenge for the general development internship vacancy.

## Goal

- To develop a web application to insert and list patient's information using a cloud database.

## Required

- You need to develop both the front-end and the back-end.
- In the front-end you MUST use React.
- In the back-end you MUST use the AWS free-tier.
- The patient data should not be static or local.
- AWS RDS MySQL, PostgreSQL or DynamoDB as database.
- AWS Lambda for serveless computing.
- AWS API Gateway for managing your REST API.

## Extra Points

- Cache the data in-browser.
- Edit and delete operations.
- Use Material UI - https://material-ui.com.
- A cool design.

## References

- Intro to React: https://reactjs.org/tutorial/tutorial.html.
- Core Components of Amazon DynamoDB: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html.
- Getting Started with DynamoDB: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html.
- Getting started with AWS Lambda: https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html.
- Create a REST API with Lambda integrations in Amazon API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-getting-started-with-rest-apis.html.

## Delivery

You MUST fork this repository to your own account and push you code to it. 
When you finish it, you must send a email to cv@medcloud.com.br with your curriculum, fork and how many time you managed to complete the challenge.

Good luck! Any doubts, feel free to send an email to cv@medcloud.com.br.
