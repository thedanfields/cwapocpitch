import type { UserTask } from "@/models/UserTask";
import type { UserId } from "@/types";
import type { IDataService } from "./DataService";

export interface IUserTaskService {
  fetchCurrent(forUserId: UserId): Promise<UserTask | null>;
  fetchCompleted(forUserId: UserId, on: Date): Promise<UserTask[]>;
  fetchRelatedTasks(forTaskId: string): Promise<UserTask[]>;
}

export class UserTaskService implements IUserTaskService {
  dataService: IDataService;

  constructor(dataService: IDataService) {
    this.dataService = dataService;
  }
  async fetchCurrent(forUserId: UserId): Promise<UserTask | null> {
    throw new Error("Method not implemented.");
  }
  async fetchCompleted(forUserId: UserId, on: Date): Promise<UserTask[]> {
    throw new Error("Method not implemented.");
  }
  async fetchRelatedTasks(forTaskId: string): Promise<UserTask[]> {
    throw new Error("Method not implemented.");
  }
}
