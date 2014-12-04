// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['jasmine/spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}