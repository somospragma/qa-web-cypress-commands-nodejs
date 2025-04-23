
`<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://f.hubspotusercontent20.net/hubfs/2829524/Copia%20de%20LOGOTIPO_original-2.png"></a>
  <br>
  Eutomation Exercise: Test Automation Suite
  <br>
</h1>


[![Cypress](https://img.shields.io/badge/Cypress-13.10.0-%23E5E5E5?logo=cypress)](https://docs.cypress.io/guides/overview/why-cypress)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-%23339933?logo=node.js)](https://nodejs.org/es/docs/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-%233178C6?logo=typescript)](https://www.typescriptlang.org/docs/)

<p align="center">
  <a href="#Test Structure">Test Structure</a> •
  <a href="#Tech Stack & Dependencies">Tech Stack & Dependencies</a> •
  <a href="#Project status">Project status</a> •
  <a href="#Use">Use</a> •
  <a href="#Access to the project">Access to the project</a> •
  <a href="#Execute tests">Execute tests</a> •
  <a href="#Pipeline Setup">Pipeline Setup</a> •
  <a href="#Support">Support</a> •
  <a href="#Author">Author</a> •
  <a href="#Licencia">Licencia</a> •

</p>

![screenshot](cypress/downloads/practice_exercise_for_archetype_commands.cy.ts.gif)

## Test Structure
Test suite for the Pragma archetype on the Automation Exercise web platform, architected using the Command design pattern. Critical test cases are implemented and executed with the Cypress framework.



### [Test Case](https://www.automationexercise.com/test_cases)
| N° | Test Case | Key Functionality | State |
|----|-----------|-------------------|-------|
**1** | `Register User` | User Registration | 🟢
**2** | `Login User with correct email and password` | User Login | 🟢
**3** | `Login User with incorrect email and password` | Login Error Handling | 🟢
**4** | `Logout User` | User Logout | 🔴
**5** | `Register User with existing email` | Duplicate Email Validation | 🔴
**6** | `Contact Us Form` | Contact Form Submission | 🔴
**7** | `Verify Test Cases Page` | Test Cases Page Verification | 🔴
**8** | `Verify All Products and product detail page` | Product Listing & Detail Display | 🔴
**9** | `Search Product` | Product Search Functionality | 🔴
**10** | `Verify Subscription in home page` | Newsletter Subscription (Home Page) | 🔴
**11** | `Verify Subscription in Cart page` | Newsletter Subscription (Cart Page) | 🔴
**12** | `Add Products in Cart` | Add to Cart Functionality | 🔴
**13** | `Verify Product quantity in Cart` | Cart Quantity Update | 🔴
**14** | `Place Order: Register while Checkout` | Guest Registration at Checkout | 🟢
**15** | `Place Order: Register before Checkout` | Pre‑Checkout Registration Flow | 🔴
**16** | `Place Order: Login before Checkout` | Pre‑Checkout Authentication | 🔴
**17** | `Remove Products From Cart` | Remove from Cart Functionality | 🔴
**18** | `View Category Products` | Category‑Based Product Navigation | 🔴
**19** | `View & Cart Brand Products` | Brand Filtering & Add to Cart | 🔴
**20** | `Search Products and Verify Cart After Login` | Search Persistence & Cart Verification | 🔴
**21** | `Add review on product` | Product Review Submission | 🔴
**22** | `Add to cart from Recommended items` | Recommended Items Cart Addition | 🔴
**23** | `Verify address details in checkout page` | Checkout Address Validation | 🔴
**24** | `Download Invoice after purchase order` | Invoice Download Functionality | 🔴
**25** | `Verify Scroll Up using 'Arrow' button and Scroll Down functionality` | Scroll Up/Down UI Navigation (Arrow) | 🔴
**26** | `Verify Scroll Up without 'Arrow' button and Scroll Down functionality` | Scroll Up/Down UI Navigation (Gesture) | 🔴

### [API Test](https://www.automationexercise.com/api_list)
| N° | Test Case | Key Functionality | State |
|----|-----------|-------------------|-------|
**1** | `Get All Products List` | Retrieve all products | 🔴
**2** | `POST To All Products List` | Create a new product | 🔴
**3** | `Get All Brands List` | Retrieve all brands | 🔴
**4** | `PUT To All Brands List` | Update brand information | 🔴
**5** | `POST To Search Product` | Execute product search | 🔴
**6** | `POST To Search Product without search_product parameter` | Validate missing search parameter | 🔴
**7** | `POST To Verify Login with valid details` | Authenticate user with correct credentials | 🔴
**8** | `POST To Verify Login without email parameter` | Validate missing email parameter in login request | 🔴
**9** | `DELETE To Verify Login` | Handle unsupported DELETE on login endpoint | 🔴
**10** | `POST To Verify Login with invalid details` | Handle authentication failure for invalid credentials | 🔴
**11** | `POST To Create/Register User Account` | Register a new user | 🟢
**12** | `DELETE METHOD To Delete User Account` | Delete an existing user account | 🟢
**13** | `PUT METHOD To Update User Account` | Update existing user account details | 🔴
**14** | `GET user account detail by email` | Retrieve user account by email | 🔴


## 🛠 Tech Stack & Dependencies

### Core Technologies

* [![Cypress](https://img.shields.io/badge/Cypress-13.10.0-%23E5E5E5?logo=cypress&logoColor=black)](https://www.cypress.io/)  
**End-to-End Testing Framework** - Modern frontend testing tool for web applications

* [![Node.js](https://img.shields.io/badge/Node.js-18.x-%23339933?logo=node.js&logoColor=white)](https://nodejs.org/en/docs)  
**Runtime Environment** - JavaScript execution platform for build processes and tooling

* [![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-%233178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)  
**Typed Superset** - Strict syntactical superset of JavaScript with optional static typing

### Key Dependencies

* [![Mochawesome](https://img.shields.io/badge/Mochawesome_Reporter-3.8.2-%234B0082?logo=testing-library)](https://www.npmjs.com/package/cypress-mochawesome-reporter)  
**Test Reporting** - HTML/CSS dashboard generation with screenshots and video integration

* [![dotenv-cli](https://img.shields.io/badge/dotenv_cli-7.4.2-%23ECD53F?logo=.env&logoColor=black)](https://www.npmjs.com/package/dotenv-cli)  
**Environment Management** - Multi-environment configuration loader with CLI support

## Project status

The project has updated documentation, as well as the previously defined automated flows. The remaining functionalities that have not yet been automated can be addressed as practical exercises oriented to the implementation of the Command design pattern.


## Use
The project can be executed locally, used as a practice environment and adopted as a base template for the implementation of new developments in Pragma accounts that require automation following this design pattern.

## 📁 Access to the project

- [Azure DevOps hosted project](https://pragmatranser.visualstudio.com/Transer/_git/transer-test-web)

### Cloning the project from the command terminal

Execute the following steps in your terminal to clone this repository and prepare the local environment:

```bash
# Clone the repository
git clone https://github.com/somospragma/qa-web-cypress-commands-nodejs.git

# Enter the command folder
cd qa-web-cypress-commands-nodejs/

# Instalar dependencias
npm install
```

##  🛠️ Execute tests

The following are the npm scripts that allow you to run Cypress tests in both interactive and headless mode:

```bash
# Start Cypress Test Runner (interactive mode)
npm run cy:open

# Run all tests in headless mode (no graphical interface)
npm run cy:run

# Execute a specific spec or set of specs (recommended for CI/CD)
npm run cy:spec -- './cypress/e2e/E2ERouteRunner'
```

### Examples

```bash
-npm run cy:open
-npm run cy:run
-npm run cy:spec -- './cypress/e2e/E2ERouteRunner'
```

##  🛠️ Execute tests Chrome:

To force tests to run in Google Chrome, use any of these commands:

```bash
# Open Test Runner and select Chrome manually
npm run cy:open

# Execute tests headless en Chrome
npm run cy:run -- --browser chrome

# Execute a specific spec in Chrome
npm run cy:run -- --browser chrome ./cypress/e2e/E2ERouteRunner
```
### Examples

```bash
-npm run cy:open
-npm run cy:run --browser chrome
-npm run cy:run --browser chrome ./cypress/e2e/E2ERouteRunner
```

##  🛠️ Execute tests Edge:

If you prefer Microsoft Edge, run:

```bash
# Open Test Runner and select Edge manually
npm run cy:open

# Execute tests headless en Edge
npm run cy:run -- --browser edge

# Execute a specific spec in Edge
npm run cy:run -- --browser edge ./cypress/e2e/E2ERouteRunner
```

### Example

```bash
-npm run cy:open
-npm run cy:run --browser Edge
-npm run cy:run --browser Edge ./cypress/e2e/E2ERouteRunner
```

##  🛠️ Execute tests Firefox

To launch the tests in Mozilla Firefox, use these commands

```bash
# Open Test Runner and select Firefox manually
npm run cy:open

# Execute tests headless en Firefox
npm run cy:run -- --browser firefox

# Execute a specific spec in Firefox
npm run cy:run -- --browser firefox ./cypress/e2e/E2ERouteRunner
```

### Example

```bash
npm run cy:open
npm run cy:run -- --browser firefox
npm run cy:run -- --browser firefox ./cypress/e2e/E2ERouteRunner
```

## Pipeline Setup

```yaml
# azure-pipelines.yml example
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

stages:
- stage: QA
  displayName: 'Execute tests QA'
  variables:
  - group: QA_Vars  # Variable group with CYPRESS_URL=QA and credentials
  jobs:
  - job: Cypress_Tests
    strategy:
      matrix:
        chrome:
          browser: 'chrome'
        edge:
          browser: 'edge'
        firefox:
          browser: 'firefox'
      maxParallel: 3
    displayName: 'Tests in ${{ matrix.browser }}'
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '16.x'
    
    - script: npm install
      displayName: 'Install dependencies'
    
    - script: |
        npx cypress run --browser $(browser) --spec "cypress/e2e/E2ERouteRunner"
      displayName: 'Execute E2E tests'
      env:
        CYPRESS_URL: $(CYPRESS_URL)
        CYPRESS_USER: $(CYPRESS_USER)
        CYPRESS_EMAIL: $(CYPRESS_EMAIL)
        CYPRESS_PASSWORD: $(CYPRESS_PASSWORD)
```
## Support

It is performed by an automated quality analyst from Pragma's QA team.

## Author

| [<img src="https://lh3.googleusercontent.com/a/AAcHTte1xmCZ9I4zVDv--w3aNuKsCZ5oScMvDlV4NS8T=s288-c-no" width=115><br><sub>Juan Carlos Herazo Plazas.</sub>](https://gitlab.com/juan.herazop) <br/>  
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|


## Licencia
The project is built by Pragma as an archetype of development.