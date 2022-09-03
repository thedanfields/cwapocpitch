<script setup lang="ts">
import { NDivider, NCard, NDescriptions, NDescriptionsItem } from "naive-ui";

import type Patient from "@/models/Patient";
import PatientTagList from "./PatientTagList.vue";
import GenderIcon from "./GenderIcon.vue";
import PatientCore from "./PatientCore.vue";

interface Props {
  patient: Patient;
}

const props = defineProps<Props>();
const displayName = `${props.patient.last_name}, ${props.patient.first_name}`;
</script>
<template>
  <PatientCore :patient="props.patient">
    <n-divider title-placement="left">demographics</n-divider>
    <n-descriptions label-placement="top">
      <n-descriptions-item label="Institution">
        {{ props.patient.institution }}
      </n-descriptions-item>
      <n-descriptions-item label="Medical Record Number">
        {{ props.patient.mrn }}
      </n-descriptions-item>
      <n-descriptions-item label="Date Of Birth">
        {{ props.patient.dob.toLocaleDateString() }}
      </n-descriptions-item>
    </n-descriptions>
    <n-divider title-placement="left">discharge info</n-divider>
    <n-descriptions label-placement="top">
      <n-descriptions-item label="Facility">
        ...some facility
      </n-descriptions-item>
      <n-descriptions-item label="Date / Time">
        {{
          `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        }}
      </n-descriptions-item>
      <n-descriptions-item label="Event">
        Event Link / Component
      </n-descriptions-item>
    </n-descriptions>
  </PatientCore>
</template>
