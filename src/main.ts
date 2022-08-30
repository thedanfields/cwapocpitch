import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { InjectionKeys } from "./constants";
import type { IPatientService } from "./services/PatientService";
import { ConfigService } from "./services/ConfigService";
import { DataService } from "./services/DataService";
import Patient from "./models/Patient";

const app = createApp(App);

app.use(createPinia());
app.use(router);

class FakePatientService implements IPatientService {
  async getById(patientId: string): Promise<Patient> {
    const fakePatient = new Patient(
      `first_name_value (${patientId})`,
      "last_name_value",
      new Date()
    );
    return fakePatient;
  }
}

app.provide(InjectionKeys.PatientService, new FakePatientService());

app.mount("#app");
