import { defineConfig } from "cypress";
import cypressFailFast from "cypress-fail-fast/plugin";

require('dotenv').config();
const fecha = new Date();

const viewports = [
  { name: 'maximum desktop', width: 1400, height: 900 },
  // { name: 'minimal desktop', width: 1000, height: 600 },
];

export default defineConfig({
  pageLoadTimeout: 30000,
  "defaultCommandTimeout": 20000,
  // retries: {
  //   runMode: 0,  // Number of retries when executing 'cypress run'.
  //   openMode: 10  // Number of retries in interactive mode ('cypress open')
  // },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `reports/report_${fecha.getDate()}_${fecha.getMonth() + 1}_${fecha.getFullYear()}`,
    reportPageTitle: 'Test report Automation Exercise',
    inlineAssets: true,
    charts: true
  },
  e2e: {
    baseUrl: process.env.URL,
    testIsolation: false,
    // experimentalRunAllSpecs: true,
    // experimentalModifyObstructiveThirdPartyCode: true,
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    numTestsKeptInMemory: 1,
    video: true,
    // videoUploadOnPasses: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      cypressFailFast(on, config);
      Object.keys(process.env).forEach((key) => {
        config.env[key] = process.env[key];
      });
      config.env.viewports = viewports;
      return config;
    },
  },
});
