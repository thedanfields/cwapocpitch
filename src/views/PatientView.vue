<script setup lang="ts">
import PatientDemographics from "@/components/PatientDemographics.vue";
import { InjectionKeys } from "@/constants";
import type Patient from "@/models/Patient";
import type { PatientService } from "@/services/PatientService";
import { inject, onBeforeMount, ref } from "vue";
import PatientTimeline from "../components/PatientTimeline.vue";
import { NSpace } from "naive-ui";

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
  <div v-if="patient" class="content">
    <n-space>
      <PatientDemographics v-bind:patient="patient" />
      <PatientTimeline />
    </n-space>
  </div>
  <div v-else>oh-no, patient not found</div>
</template>
