import {plainToInstance, ClassConstructor} from 'class-transformer';
import { MongoConnectionString } from '@project/shared/shared-types';

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, {excludeExtraneousValues: true});
}

export function getMongoConnectionString({username, password, databaseName, host, port, authDatabase}: MongoConnectionString): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
