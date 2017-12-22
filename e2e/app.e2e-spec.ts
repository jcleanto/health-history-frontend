import { HealthHistoryFrontendPage } from './app.po';

describe('health-history-frontend App', () => {
  let page: HealthHistoryFrontendPage;

  beforeEach(() => {
    page = new HealthHistoryFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
