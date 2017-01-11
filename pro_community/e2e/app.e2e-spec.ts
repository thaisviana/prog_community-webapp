import { ProCommunityPage } from './app.po';

describe('pro-community App', function() {
  let page: ProCommunityPage;

  beforeEach(() => {
    page = new ProCommunityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
