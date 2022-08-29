const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'test/cypress/fixtures',
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./test/cypress/plugins/index.ts').default(on, config)
    },
    baseUrl: 'http://localhost:8080/',
    specPattern: 'test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'test/cypress/support/index.ts',
  },
  component: {
    setupNodeEvents(on, config) {},
    supportFile: 'test/cypress/support/component.ts',
    specPattern: 'src/**/*.spec.ts',
  },
})
