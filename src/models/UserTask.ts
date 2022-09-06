import type { UserId } from "@/types";
import type Patient from "./Patient";

export enum UserTaskType {
  EnrollmentAttempt,
  MRP,
}

export abstract class UserTask {
  assignedToUserId: UserId;
  id: string;
  patient: Patient;

  constructor(id: string, assignedToUserId: UserId, patient: Patient) {
    this.assignedToUserId = assignedToUserId;
    this.id = id;
    this.patient = patient;
  }

  abstract type: UserTaskType;
}

export class MRPTask extends UserTask {
  type: UserTaskType = UserTaskType.MRP;

  constructor(id: string, assignedToUserId: UserId, patient: Patient) {
    super(id, assignedToUserId, patient);
  }
}

export class EnrollmentAttemptTask extends UserTask {
  type: UserTaskType = UserTaskType.EnrollmentAttempt;
  attemptNumber: number;

  constructor(
    id: string,
    assignedToUserId: UserId,
    attemptNumber: number,
    patient: Patient
  ) {
    super(id, assignedToUserId, patient);
    this.attemptNumber = attemptNumber;
  }
}
