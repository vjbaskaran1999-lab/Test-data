const config = {
  testDir: './tests',
  timeout: 3000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    browserName: 'chromium'


  }


};

module.exports = config;

