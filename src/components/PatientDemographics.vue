<script setup lang="ts">
import {
  NDivider,
  NCard,
  NDescriptions,
  NDescriptionsItem,
} from "naive-ui";

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
    </template>
  </n-card>
</template>
