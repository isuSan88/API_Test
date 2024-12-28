# QA Automation Tests with Playwright
This repository contains automated tests for the [Restful API](https://restful-api.dev/) using the Playwright framework. The tests cover basic CRUD (Create, Read, Update, Delete) operations as outlined in the coding test instructions.
## Project Overview
The following scenarios are automated:
1.	Get a list of all objects.
2.	Add an object using the POST method.
3.	Retrieve a single object using the ID from Step 2.
4.	Update the object added in Step 2 using the PUT method.
5.	Delete the object added in Step 2 using the DELETE method.
6.	Get a non-existent object
7.	Add an object using POST without body request
8.	Update the object with non-existent ID
9.	Delete request for a non-existent ID
The tests include assertions to validate the API responses.
## Prerequisites
1.	Node.js (version >= 16)
2.	npm (Node Package Manager) 
3.	Install Playwright globally or locally in your project.
Ensure you have the required dependencies installed before running the tests.
## Installation
1.	Clone this repository:
bash
Copy code
git clone <repository-url>
2.	Navigate to the project directory:
bash
Copy code
cd <repository-name>
3.	Install dependencies:
bash
Copy code
npm install
# Running Tests
1.	Run all tests:
bash
Copy code
npx playwright test
2.	Run tests with detailed output:
bash
Copy code
npx playwright test --reporter=list
3.	Open the test report after execution:
bash
Copy code
npx playwright show-report
#Notes
The API URL is set to https://restful-api.dev/objects. Update it in the code if required.
Ensure the API server is up and accessible.

