import { browser, element, by, $$ } from "protractor";

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

    element(by.id('username')).sendKeys('myusername');
    // browser.sleep(1000);
    element(by.id('password')).sendKeys('mypassword');
    // browser.sleep(1000);
    element(by.id('btnLogin')).click();

    element.all(by.css('.example-card')).then(function(elemsAfter) {
      // elemsAfter will be a number specifying how many elements of .yourCssClassHere there are in the page.
      let sittersCountBefore = elemsAfter.length;
      $$('menuRegister').click();

      $$('usernameInput').sendKeys('Simon');
      $$('passwordInput').sendKeys('Simons Password');
      $$('nameInput').sendKeys('Simon Ryom');
      $$('registerSubmit').click();

      


      console.log(elemsAfter.length);


      expect(true).toBeFalsy();
    });
    
    // browser.sleep(5000);

  });


});