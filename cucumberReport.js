const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
  
});