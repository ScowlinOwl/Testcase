module.exports = { 
    'tags' : ['testcase4'], 
    'test artsyjewels' : function (browser) { 
    browser 
    .url('https://store.steampowered.com/login/?redir=%3Fl%3Drussian&redir_ssl=1') // Go to a url 
    .waitForElementVisible('body', 1000) // wait till page loads 
    .click('#global_header > div > div.supernav_container > a:nth-child(1)')
    .setValue('#store_nav_search_term',['Dawn of Man',browser.Keys.ENTER]) // send values
    .click('#search_result_container > div:nth-child(2) > a:nth-child(2) > div.responsive_search_name_combined > div.col.search_released.responsive_secondrow')
    .click('#game_area_purchase > div.game_area_purchase_game_wrapper > div > div.game_purchase_action > div > div.btn_addtocart > a > span')

    .pause(1000) 
    .end(); 
    } 
    };