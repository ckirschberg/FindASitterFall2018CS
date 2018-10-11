import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

/* 
 1.0: Create a new sitter
*/



describe('sitters-list', () => {

  // 1: Navigate to findasitter
  // 2: Fill out login and click
  // 3: Count number of sitters (a)
  // 4: Navigate to register without browser.get (no page reload!)
  // 5: Fill out form to register a new sitter.
  // 6: Navigate to sitters-list without browser.get (no page reload!)
  // 7: Count number of sitters (b)
  // 8: Expect b-a should be 1

  it('1.0: Create a new sitter and after, there should be one more', () => {
    browser.get('/portal/findasitter'); // 1
    let page = new AppPage();
    //call login
    page.login();
browser.sleep(2000);
console.log("hej");
    element.all(by.css('.example-card')).then(function(elemsBefore) {
      // elemsAfter will be a number specifying how many elements of .yourCssClassHere there are in the page.


      let sittersCountBefore = elemsBefore.length;
      element(by.id('menuRegister')).click();
      // element(by.id('usernameInput')) == $$()

      // browser.sleep(2000);
      $$('#usernameInput').sendKeys('Simon');
      $$('#passwordInput').sendKeys('Simons Password');
      $$('#nameInput').sendKeys('Simon Ryom');
// console.log(elemsBepfore.length);
      $$('#registerSubmit').click();
// browser.sleep(4000);
      page.login();
      element.all(by.css('.example-card')).then(function(elemsAfter) {
        let sittersCountAfter = elemsAfter.length;
        expect(sittersCountAfter-sittersCountBefore).toBe(1);
      });
    });
  });

});