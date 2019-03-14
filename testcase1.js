module.exports = { 
    'tags' : ['testcase1'], 
    'Demo test Google' : function (browser) { 
    browser 
    .url('https://www.artsyjewels.com/') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels') // Make sure Site title matches 
    // .assert.visible('input[type=text]') 
    // .setValue('input[type=text]', 'nightwatchjs') // send values 
    .click('#customer_login > div > p:nth-child(4) > input') // click on search box 
    .pause(2000) 
    .end(); 
    } 
    };