export default class Patient {
  first_name: string;
  last_name: string;
  dob: Date;
  constructor(first_name: string, last_name: string, dob: Date) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.dob = dob;
  }

  get display_name(): string {
    return `${this.last_name}, ${
      this.first_name
    } (${this.dob.toLocaleDateString()})`;
  }
}
