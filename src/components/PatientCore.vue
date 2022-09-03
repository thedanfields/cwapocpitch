<script setup lang="ts">
import { NDivider, NCard, NDescriptions, NDescriptionsItem } from "naive-ui";

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
    <PatientTagList :tags="props.patient.tags" />
    <template #footer>
      <slot></slot>
    </template>
  </n-card>
</template>
