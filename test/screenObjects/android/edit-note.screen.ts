
class EditNoteScreen {
  public get firstNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
  }
  public get moreIcon() {
    return $('~More');
  }
  public get deleteIcon() {
    return $('//*[@text="Delete"]');
  }
  public get navIcon() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
  }
  public get trashCanItem() {
    return $('//*[@text="Trash Can"]');
  }

}

export default new EditNoteScreen();
