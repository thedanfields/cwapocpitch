import type { InjectionKey } from "vue";
import type { IPatientService } from "./services/PatientService";

export class InjectionKeys {
  static PatientService = Symbol() as InjectionKey<IPatientService>;
}
