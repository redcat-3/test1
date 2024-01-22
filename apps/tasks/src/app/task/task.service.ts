import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from '@project/repository/task-repository';
import { CreateTaskDto, UpdateTaskDto } from '@project/shared/shared-dto';
import { Task, Status } from '@project/shared/shared-types';
import { TaskError } from './task.constant';
import { TaskEntity } from 'repository/task-repository/src/lib/task.entity';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
  ) {
  }
  public async create(dto: CreateTaskDto) {
    const taskEntity = new TaskEntity(dto);
    return this.taskRepository
      .create(taskEntity);
  }

  public async findByTittle(title: string): Promise<Task | null> {
    const task = this.taskRepository.findByTitle(title);
    if (!task) {
      throw new NotFoundException (TaskError.NotFound);
    }
    return task;
  }

  public async findById(id: string): Promise<Task | null> {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new NotFoundException (TaskError.NotFound);
    }
    return task;
  }

  public async update(id: string, dto: UpdateTaskDto): Promise<Task | null> {
    let task = await this.taskRepository.findById(id);
    task = {...task, ...dto};
    const taskEntity = new TaskEntity(task);
    return await this.taskRepository.update(id, taskEntity);
  }

  public async getTasksList(): Promise<Task[] | null> {
    return await this.taskRepository.getTasksList();
  }

  public async remove(id: string) {
    return this.taskRepository.destroy(id);
  }
}
