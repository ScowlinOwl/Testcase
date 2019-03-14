module.exports = { 
  'tags' : ['testcase1'], 
  'Demo test Google' : function (browser) { 
  browser 
  .url('https://www.artsyjewels.com/') // Go to a url 
  .waitForElementVisible('body', 1000) // wait till page loads 
  .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels') // Make sure Site title matches 
  // .assert.visible('input[type=text]') 
  // .setValue('input[type=text]', 'nightwatchjs') // send values 
  .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(5) > a') // click on search box 
  .pause(2000) 
  .end(); 
  } 
  };