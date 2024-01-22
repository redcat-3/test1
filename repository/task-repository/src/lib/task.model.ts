import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status, Task } from '@project/shared/shared-types';

@Schema({
  collection: 'tasks',
  timestamps: true,
})
export class TaskModel extends Document implements Task {
  @Prop({
    required: true,
  })
  public title: string;

  @Prop({
    required: true,
  })
  public description: string;

  @Prop({
    required: true,
    type: String,
    enum: Status,
    default: Status.Awaits,
  })
  public status: Status;
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);
