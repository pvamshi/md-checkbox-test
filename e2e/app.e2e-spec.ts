import { MdCheckboxTestPage } from './app.po';

describe('md-checkbox-test App', function() {
  let page: MdCheckboxTestPage;

  beforeEach(() => {
    page = new MdCheckboxTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
