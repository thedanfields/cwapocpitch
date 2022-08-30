<script setup lang="ts">
import { NCard, NDescriptions, NDescriptionsItem } from "naive-ui";

import type Patient from "@/models/Patient";
import PatientTagList from "./PatientTagList.vue";
import GenderIcon from "./GenderIcon.vue";

interface Props {
  patient: Patient;
}

const props = defineProps<Props>();
const displayName = `${props.patient.last_name}, ${props.patient.first_name}`;
</script>
<template>
  <n-card :title="displayName">
    <template #header-extra>
      {{ props.patient.age }} ({{ props.patient.dob.toLocaleDateString() }})
      <GenderIcon :gender="props.patient.gender" />
    </template>
    <n-descriptions label-placement="top" title="patient information:">
      <n-descriptions-item label="Institution">
        {{ props.patient.institution }}
      </n-descriptions-item>
      <n-descriptions-item label="Medical Record Number">
        {{ props.patient.mrn }}
      </n-descriptions-item>
    </n-descriptions>
    <template #footer> <PatientTagList :tags="props.patient.tags" /> </template>
  </n-card>
</template>
