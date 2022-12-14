import type Patient from "@/models/Patient";
import type { IDataService } from "./DataService";

export interface IPatientService {
  getById(patientId: string): Promise<Patient>;
}

export class PatientService implements IPatientService {
  private dataService: IDataService;
  constructor(dataService: IDataService) {
    this.dataService = dataService;
  }

  async getById(patientId: string): Promise<Patient> {
    const resourceUrl = `patients/${patientId}`;
    return await this.dataService.get<Patient>(resourceUrl);
  }
}
