import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigName, ConfigTasksModule } from '@project/config/config-tasks';
import { TaskModule } from './task/task.module';
import { getMongooseOptions } from '@project/util/util-core'

@Module({
  imports: [
    ConfigTasksModule,
    MongooseModule.forRootAsync(getMongooseOptions(ConfigName.Db)),
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
