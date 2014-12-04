// conf.js
exports.config = {
  framework: 'cucumber',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['cucumber/*.feature'],
  capabilities: {
    browserName: 'chrome'
  },
  cucumberOpts: {
    require: 'cucumber/stepDefinitions.js',
    tags: '@dev',
    format: 'summary'
  }
}