import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Status } from '@project/shared/shared-types';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Status of task',
    example: Status.Awaits
  })
  @IsOptional()
  @IsEnum(Status)
  public status: Status;

  @ApiProperty({
    description: 'Title of task',
    example: 'Тренировка'
  })
  @IsOptional()
  @IsString() 
  public title: string;

  @ApiProperty({
    description: 'Description of task',
    example: 'Тренировка силовая, не менее 1,5 часа'
  })
  @IsOptional()
  @IsString() 
  public description: string;
}
