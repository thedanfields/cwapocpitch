<script setup lang="ts">
import PatientDemographics from "@/components/PatientDemographics.vue";
import { InjectionKeys } from "@/constants";
import type Patient from "@/models/Patient";
import type { PatientService } from "@/services/PatientService";
import { inject, onBeforeMount, ref } from "vue";

interface Props {
  patient_id: string;
}

const props = defineProps<Props>();
const patient = ref<Patient>();

onBeforeMount(async () => {
  const patientService = inject(InjectionKeys.PatientService) as PatientService;
  patient.value = await patientService.getById(props.patient_id);
});
</script>

<template>
  <main>
    <div v-if="patient" class="content">
      <PatientDemographics v-bind:patient="patient" />
    </div>
    <div v-else>oh-no, patient not found</div>
  </main>
</template>
