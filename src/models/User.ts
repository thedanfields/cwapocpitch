export enum UserRole {
  Pharmacist = "pharmacist",
  ClinicSupportStaff = "clinic_support_staff",
}

export class User {
  firstName: string;
  lastName: string;
  role: UserRole;

  constructor(firstName: string, lastName: string, role: UserRole) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }
}
