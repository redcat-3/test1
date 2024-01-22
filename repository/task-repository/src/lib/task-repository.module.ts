import { Module } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModel, TaskSchema } from './task.model';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: TaskModel.name, schema: TaskSchema }
    ])],
  providers: [
    TaskRepository
  ],
  exports: [
    TaskRepository
  ]
})
export class TaskRepositoryModule {}