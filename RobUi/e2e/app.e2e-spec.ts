import { RobUiPage } from './app.po';

describe('rob-ui App', () => {
  let page: RobUiPage;

  beforeEach(() => {
    page = new RobUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
