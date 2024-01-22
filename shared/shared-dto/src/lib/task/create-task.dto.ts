import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { Status } from '@project/shared/shared-types';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Status of task',
    example: Status.Awaits
  })
  @IsEnum(Status)
  public status: Status;

  @ApiProperty({
    description: 'Title of task',
    example: 'Тренировка'
  })
  @IsString() 
  public title: string;

  @ApiProperty({
    description: 'Description of task',
    example: 'Тренировка силовая, не менее 1,5 часа'
  })
  @IsString() 
  public description: string;
}
