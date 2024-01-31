import AddNoteScreen from '../../screenObjects/android/add-note.screen.ts';

describe('create Note', () => {
  before(async () => {
    const element = await driver.$(".//*[@text='Allow']");
    await element.click();
    await AddNoteScreen.skipTutorial();
    await AddNoteScreen.addAndSaveNote(
      'TV shows',
      'Friends\nBreakingBad\nPeakyBlinders'
    );
  });

  it('create a note & check the note', async () => {
    await AddNoteScreen.validate('Friends\nBreakingBad\nPeakyBlinders');
  });
});
