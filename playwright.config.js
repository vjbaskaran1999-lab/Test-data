const config = {
  testDir: './tests',
  timeout: 5000,
  expect: {
    timeout: 2000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium'


  }


};

module.exports = config;

