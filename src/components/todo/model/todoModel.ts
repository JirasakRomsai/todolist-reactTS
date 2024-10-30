export class TodoModel {
  public id: string = '';
  public title: string = '';
  public completed: boolean = false;
  public createdAt: Date = new Date();
  public updatedAt: Date | null = null;
}
