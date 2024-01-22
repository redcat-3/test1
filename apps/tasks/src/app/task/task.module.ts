import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepositoryModule } from '@project/repository/task-repository';

@Module({
  imports: [
    TaskRepositoryModule,
  ],
  controllers: [TaskController],
  providers: [TaskService ]
})
export class TaskModule {}
