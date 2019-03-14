module.exports = { 
'tags' : ['testcase2'], 
'Demo test Google' : function (browser) { 
browser 
.url('https://www.artsyjewels.com/') // Go to a url 
.waitForElementVisible('body', 1000) // wait till page loads 
.assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels') // Make sure Site title matches 
// .assert.visible('input[type=text]') 
.click('#header > div.header2.bg-white > div.main-header2 > div > div > div.col-md-6.col-sm-8.col-xs-8 > form > input.lsx-done.tt-input.lsx-search-field') 
.setValue('#header > div.header2.bg-white > div.main-header2 > div > div > div.col-md-6.col-sm-8.col-xs-8 > form > input.lsx-done.tt-input.lsx-search-field', ['Rings',browser.Keys.ENTER]) // send values 
// click on search box 
.pause(2000) 
.end(); 
} 
}; 
// = comment not necessary for code