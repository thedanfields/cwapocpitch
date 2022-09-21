<script setup lang="ts">
import { NDivider, NDescriptions, NDescriptionsItem } from "naive-ui";

import type Patient from "@/models/Patient";
import PatientCore from "./PatientCore.vue";

interface Props {
  patient: Patient;
}

const props = defineProps<Props>();
</script>
<template>
  <PatientCore :patient="props.patient">
    <n-divider title-placement="left">demographics</n-divider>
    <n-descriptions label-placement="top">
      <n-descriptions-item label="address">
        <div>
          <p>address</p>
          <p>city, state, zip</p>
        </div>
      </n-descriptions-item>
      <n-descriptions-item label="telephone">
        <div>
          <p>888.888.8888 (m)</p>
          <p>999.999.9999 (h)</p>
        </div>
      </n-descriptions-item>
      <n-descriptions-item label="email">
        <p>test@test.com</p>
      </n-descriptions-item>
      <n-descriptions-item label="date of birth">
        {{ props.patient.dob.toLocaleDateString() }}
      </n-descriptions-item>
    </n-descriptions>
    <n-divider title-placement="left">discharge info</n-divider>
    <n-descriptions label-placement="top">
      <n-descriptions-item label="facility">
        ...some facility
      </n-descriptions-item>
      <n-descriptions-item label="date / time">
        {{
          `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        }}
      </n-descriptions-item>
      <n-descriptions-item label="event">
        Event Link / Component
      </n-descriptions-item>
    </n-descriptions>
  </PatientCore>
</template>
