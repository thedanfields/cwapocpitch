import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { InjectionKeys } from "./constants";
import type { IPatientService } from "./services/PatientService";
import Patient from "./models/Patient";
import PatientTag, { PatientTagSeverity } from "./models/PatientTag";
import { EnrollmentAttemptTask, MRPTask, UserTask } from "./models/UserTask";
import type { IUserTaskService } from "./services/UserTaskService";

const app = createApp(App);

app.use(createPinia());
app.use(router);

interface FakeDatastore {
  patients: Record<string, Patient>;
  tasks: Record<string, UserTask>;
}
const data = buildFakeData();

class FakePatientService implements IPatientService {
  async getById(patientId: string): Promise<Patient> {
    return data.patients[patientId];
  }
}

class FakeUserTaskService implements IUserTaskService {
  async fetchCurrent(forUserId: string): Promise<UserTask | null> {
    return data.tasks["1"];
  }
  async fetchCompleted(forUserId: string, on: Date): Promise<UserTask[]> {
    return [data.tasks["2"], data.tasks["3"], data.tasks["4"]];
  }
  async fetchRelatedTasks(forTaskId: string): Promise<UserTask[]> {
    throw new Error("Method not implemented.");
  }
}
app.provide(InjectionKeys.PatientService, new FakePatientService());
app.provide(InjectionKeys.UserTaskService, new FakeUserTaskService());

app.mount("#app");

function buildFakeData(): FakeDatastore {
  function getTags(): PatientTag[] {
    const readmissionTag = new PatientTag(
      PatientTagSeverity.High,
      "re-admission within 30 days"
    );

    const hasMedsTag = new PatientTag(PatientTagSeverity.Medium, "6+ meds");

    const elderlyTag = new PatientTag(PatientTagSeverity.Low, "elderly");

    const specialProgramTag = new PatientTag(
      PatientTagSeverity.None,
      "CWH Program"
    );

    return [readmissionTag, hasMedsTag, elderlyTag, specialProgramTag];
  }

  function buildPatient(
    id: string,
    mrn: string,
    firstName: string,
    lastName: string,
    gender: "M" | "F",
    dob: Date,
    timeZone: string
  ): Patient {
    const tags = getTags();
    return new Patient(
      id,
      "advantasure",
      mrn,
      firstName,
      lastName,
      gender,
      dob,
      tags,
      timeZone
    );
  }

  const patients: Record<string, Patient> = {
    "1": buildPatient(
      "1",
      "99383",
      "Dora",
      "Akunyili",
      "F",
      new Date(1954, 7, 12),
      "America/Los_Angeles"
    ),
    "2": buildPatient(
      "2",
      "2299",
      "Sabina",
      "Baldoncelli",
      "F",
      new Date(1781, 2, 6),
      "America/Phoenix"
    ),
    "3": buildPatient(
      "3",
      "6677888",
      "Isa Marte",
      "Hussaini",
      "M",
      new Date(1944, 4, 19),
      "America/Denver"
    ),
    "4": buildPatient(
      "4",
      "65480",
      "Tim",
      "Webster",
      "M",
      new Date(1946, 10, 9),
      "America/Chicago"
    ),
  };

  const currentUserId = "some_user_id";
  const tasks: Record<string, UserTask> = {
    "1": new EnrollmentAttemptTask("1", currentUserId, 2, patients["1"]),
    "2": new MRPTask("2", currentUserId, patients["2"]),
    "3": new MRPTask("3", currentUserId, patients["3"]),
    "4": new EnrollmentAttemptTask("4", currentUserId, 1, patients["4"]),
  };

  return { patients, tasks };
}
