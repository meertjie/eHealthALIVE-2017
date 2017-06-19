import { EHealthAlive2017Page } from './app.po';

describe('e-health-alive2017 App', () => {
  let page: EHealthAlive2017Page;

  beforeEach(() => {
    page = new EHealthAlive2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
