const config = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 10000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium'


  }


};

module.exports = config;

