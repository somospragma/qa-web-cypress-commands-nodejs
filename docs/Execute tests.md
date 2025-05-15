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

###  🛠️ Execute tests Chrome:

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

###  🛠️ Execute tests Edge:

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

###  🛠️ Execute tests Firefox

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