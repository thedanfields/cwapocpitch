export enum PatientTagSeverity {
  None = 0,
  Low = 1,
  Medium = 2,
  High = 3,
}

export default class PatientTag {
  severity: PatientTagSeverity;
  label: string;

  constructor(severity: PatientTagSeverity, label: string) {
    this.severity = severity;
    this.label = label;
  }
}
