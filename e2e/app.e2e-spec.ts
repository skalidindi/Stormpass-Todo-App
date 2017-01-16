import { StormpathAppPage } from './app.po';

describe('stormpath-app App', function() {
  let page: StormpathAppPage;

  beforeEach(() => {
    page = new StormpathAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
