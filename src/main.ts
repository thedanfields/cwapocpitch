import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { InjectionKeys } from "./constants";
import type { IPatientService } from "./services/PatientService";
import Patient from "./models/Patient";
import PatientTag, { PatientTagSeverity } from "./models/PatientTag";

const app = createApp(App);

app.use(createPinia());
app.use(router);

class FakePatientService implements IPatientService {
  async getById(patientId: string): Promise<Patient> {
    const tags: PatientTag[] = [
      new PatientTag(PatientTagSeverity.High, "re-admission within 30 days"),
      new PatientTag(PatientTagSeverity.Medium, "6+ meds"),
      new PatientTag(PatientTagSeverity.Low, "elderly"),
      new PatientTag(PatientTagSeverity.None, "CWH Program"),
    ];

    const fakePatient = new Patient(
      patientId,
      "united",
      "12345",
      "first_name_value",
      "last_name_value",
      "M",
      new Date(1944, 3, 2),
      tags
    );
    return fakePatient;
  }
}

app.provide(InjectionKeys.PatientService, new FakePatientService());

app.mount("#app");
