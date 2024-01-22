import { Status } from "./status.enum";

export interface Task {
  _id?: string;
  createdAt?: Date;
  title: string;
  description: string;
  status: Status;
}