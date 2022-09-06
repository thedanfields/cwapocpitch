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
      {{ props.patient.age }}
      <GenderIcon :gender="props.patient.gender" />
    </template>
    <n-descriptions label-placement="top">
      <n-descriptions-item label="institution">
        {{ props.patient.institution }}
      </n-descriptions-item>
      <n-descriptions-item label="mrn">
        {{ props.patient.mrn }}
      </n-descriptions-item>
    </n-descriptions>
    <PatientTagList :tags="props.patient.tags" />
    <template #footer>
      <slot></slot>
    </template>
  </n-card>
</template>
