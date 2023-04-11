
class ListScreen {
  public get createListBtn() {
    return $('//*[@name="Create list"]');
  }

  public get listNameInput() {
    return $('//*[@value="List Name"]');
  }

  public get createBtn() {
    return $('~Create');
  }

  listNameField(name: string) {
    return $(`~${name}`);
  }

}

export default new ListScreen();
