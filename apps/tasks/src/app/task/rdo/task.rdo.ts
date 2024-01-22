import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@project/shared/shared-types';

export class TaskRdo {
  @ApiProperty({
    description: 'The unique Task ID',
    example: '1'
  })
  @Expose({ name: '_id'})
  @Transform(({obj}) => obj._id.toString())
  public id: string;

  @ApiProperty({
    description: 'Title of task',
    example: 'Тренировка'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Description of task',
    example: 'Тренировка силовая, не менее 1,5 часа'
  })
  @Expose()
  public description: string;

  @ApiProperty({
    description: 'Task registration date',
  })
  @Expose({ name: 'createdAt'})
  public createdAt: Date;

  @ApiProperty({
    description: 'Вид покупки',
    example: Status.Awaits
  })
  @Expose()
  public status: Status;
}
