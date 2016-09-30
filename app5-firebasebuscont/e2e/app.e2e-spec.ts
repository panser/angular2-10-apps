import { App5FirebasebuscontPage } from './app.po';

describe('app5-firebasebuscont App', function() {
  let page: App5FirebasebuscontPage;

  beforeEach(() => {
    page = new App5FirebasebuscontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
