class ItemScreen {
  public get createItem() {
    return $("//*[@name='Create item']");
  }
  public get title() {
    return $('//*[@value="Title"]');
  }
  public get dueDate() {
    return $("//*[@value='Due']");
  }
  public get datePicker() {
    return $("~Date Picker");
  }
  public get secondWindow() {
    return $("//XCUIElementTypeWindow[@index=2]");
  }
  public get createBtn() {
    return $("~Create");
  }

  getByAccessibility(name: string) {
    return $(`~${name}`);
  }

}

export default new ItemScreen();
