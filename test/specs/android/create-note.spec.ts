import AddNoteScreen from '../../screenObjects/android/add-note.screen.ts';

describe('create Note', () => {
  before(async () => {
    const element = await driver.$('~App');
    await element.click();
    await $('~Search').click();
    await $('~Invoke Search').click();
  });

  it('create a note & check the note', async () => {
    await expect(
      $('//android.widget.TextView[@text="App/Search/Invoke Search"]')
    ).toBeDisplayed();
  });
});
