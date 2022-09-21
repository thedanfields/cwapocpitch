import type PatientTag from "@/models/PatientTag";

export default class Patient {
  id: string;
  institution: string;
  mrn: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: Date;
  tags: PatientTag[];
  time_zone: string;

  constructor(
    id: string,
    institution: string,
    mrn: string,
    first_name: string,
    last_name: string,
    gender: string,
    dob: Date,
    tags: PatientTag[],
    time_zone: string
  ) {
    this.id = id;
    this.institution = institution;
    this.mrn = mrn;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.dob = dob;
    this.tags = tags;
    this.time_zone = time_zone;
  }

  get display_name(): string {
    return `${this.last_name}, ${
      this.first_name
    } (${this.dob.toLocaleDateString()})`;
  }

  get age(): number {
    const timeDiff = Math.abs(Date.now() - this.dob.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    return age;
  }
}
