import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    // browser.sleep(4000);
    expect(page.getParagraphText()).toEqual('Welcome to Find A Sitter!');
  });
});
