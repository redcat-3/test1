import { Status, Task } from '@project/shared/shared-types';

export class TaskEntity implements Task {
    public _id: string | undefined;
    public createdAt: Date | undefined;
    public title: string;
    public description: string;
    public status: Status;

  constructor(taskData: Task) {
    this._id = taskData._id;
    this.title = taskData.title;
    this.description = taskData.description;
    this.createdAt = taskData.createdAt;
    this.status = taskData.status;
  }

  public toObject() {
    return {...this};
  }
}
