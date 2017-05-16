import { ConsolaWebVidaPage } from './app.po';

describe('consola-web-vida App', () => {
  let page: ConsolaWebVidaPage;

  beforeEach(() => {
    page = new ConsolaWebVidaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
