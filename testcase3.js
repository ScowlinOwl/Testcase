module.exports = { 
    'tags' : ['testcase3'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/login/?redir=%3Fl%3Drussian&redir_ssl=1') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .setValue('#input_username', 'sb640385') 
    .setValue('#input_password', '640385') 
    .click('#login_btn_signin > button > span')
    .click('#global_header > div > div.supernav_container > a:nth-child(1)') 
    .pause(1000) 
    .end(); 
    } 
    };