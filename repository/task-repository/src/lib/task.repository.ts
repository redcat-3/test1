import { CRUDRepository } from '@project/util/util-types';
import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { Status, Task } from '@project/shared/shared-types';
import { TaskModel } from './task.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, string, Task> {
  constructor(
    @InjectModel(TaskModel.name) private readonly TaskModel: Model<TaskModel>) {
  }

  public async create(item: TaskEntity): Promise<Task> {
    const newTask = new this.TaskModel(item);
    return newTask.save();
  }

  public async destroy(id: string): Promise<void> {
    this.TaskModel.deleteOne({_id: id});
  }

  public async findById(id: string): Promise<Task | null> {
    return this.TaskModel
      .findOne({ _id: id })
      .exec();
  }

  public async findByTitle(title: string): Promise<Task | null> {
    return this.TaskModel
      .findOne({ title })
      .exec();
  }

  public async update(id: string, item: TaskEntity): Promise<Task> {
    return this.TaskModel
      .findByIdAndUpdate(id, item, { new: true })
      .exec();
  }

  public async getTasksList(): Promise<Task[] | null> {
    return await this.TaskModel.find().exec();
  }
}
