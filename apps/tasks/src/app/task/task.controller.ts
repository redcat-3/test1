import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiResponse } from '@nestjs/swagger';
import { TaskError, TaskMessages, TaskPath } from './task.constant';
import { CreateTaskDto, UpdateTaskDto } from '@project/shared/shared-dto';
import { MongoidValidationPipe } from '@project/shared/shared-pipes';
import { TaskRdo } from './rdo/task.rdo';
import { fillObject } from '@project/util/util-core';

@Controller(TaskPath.Main)
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) {}

  @ApiResponse({
    status:HttpStatus.CREATED,
    description:TaskMessages.Add
  })
  @Post(TaskPath.Add)
  public async create(@Body() dto: CreateTaskDto) {
    const newUser = await this.taskService.create(dto);
    return fillObject(TaskRdo, newUser);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TaskMessages.TaskFound
  })
  @Get(TaskPath.Id)
  public async getTaskById(@Param('id', MongoidValidationPipe) id: string) {
    const findTask = await this.taskService.findById(id);
    return fillObject(TaskRdo, findTask);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TaskMessages.TaskUpdated
  })
  @Patch(TaskPath.Id)
  public async update(@Param('id', MongoidValidationPipe) id: string, @Body() dto: UpdateTaskDto) {
    const updatedTask = await this.taskService.update(id, dto);
    return fillObject(TaskRdo, updatedTask);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TaskMessages.List
  })
  @Get(TaskPath.List)
  public async show() {
    const tasks = await this.taskService.getTasksList();
    if (!tasks) {
      return [];
    }
    return tasks.map((item) => fillObject(TaskRdo, item));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: TaskMessages.Remove,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: TaskError.Delete
  })
  @Delete(TaskPath.Id)
  public async delete(@Param('id') id: string) {
    return await this.taskService.remove(id);
  }
}
