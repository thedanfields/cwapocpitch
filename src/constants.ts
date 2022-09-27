import type { InjectionKey } from "vue";
import type { IPatientService } from "./services/PatientService";
import type { ITimeService } from "./services/TimeService";
import type { IUserTaskService } from "./services/UserTaskService";

export class InjectionKeys {
  static TimeService: InjectionKey<ITimeService> = Symbol("time-service");
  static PatientService = Symbol() as InjectionKey<IPatientService>;
  static UserTaskService = Symbol() as InjectionKey<IUserTaskService>;
}
