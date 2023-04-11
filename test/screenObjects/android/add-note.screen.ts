class AddNoteScreen {
  public get skipBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
  }

  public get addNoteTxt() {
    return $('//*[@text="Add note"]');
  }

  public get textOption() {
    return $('//*[@text="Text"]');
  }

  public get textEditing() {
    return $('//*[@text="Editing"]');
  }

  public get noteHeading() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
  }

  public get noteBody() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
  }

  public get editBtn() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
  }

  public get viewNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
  }

  public async saveNote() {
    await driver.back();
    await driver.back();
  }

  public async skipTutorial() {
    await this.skipBtn.click();

    await expect(this.addNoteTxt).toBeDisplayed();
  }

  public async addAndSaveNote(noteHeading: any, noteBody: any) {
    await this.addNoteTxt.click();
    await this.textOption.click();
    await expect(this.textEditing).toBeDisplayed();

    // add note title
    await noteHeading.addValue(noteHeading);

    // add note body
    await noteBody.addValue(noteBody);

    // save the changes
    await this.saveNote();

    // assertion
    await expect(this.editBtn).toBeDisplayed();
    await expect(this.viewNote).toHaveText(noteBody);
  }
}

export default new AddNoteScreen();
