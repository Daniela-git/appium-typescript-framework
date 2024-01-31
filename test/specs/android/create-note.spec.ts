import AddNoteScreen from '../../screenObjects/android/add-note.screen.ts';

describe('create Note', () => {
  before(async () => {
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
