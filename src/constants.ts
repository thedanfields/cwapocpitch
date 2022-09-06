import type { InjectionKey } from "vue";
import type { IPatientService } from "./services/PatientService";
import type { IUserTaskService } from "./services/UserTaskService";

export class InjectionKeys {
  static PatientService = Symbol() as InjectionKey<IPatientService>;
  static UserTaskService = Symbol() as InjectionKey<IUserTaskService>;
}
