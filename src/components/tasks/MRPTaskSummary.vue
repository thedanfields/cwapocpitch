<script setup lang="ts">
import type { MRPTask } from "@/models/UserTask";
import { NDescriptions, NDescriptionsItem } from "naive-ui";

interface Props {
  task: MRPTask;
}
const props = defineProps<Props>();
</script>

<template>
  <n-descriptions label-placement="top">
    <n-descriptions-item label="Priority">
      <p>High</p>
    </n-descriptions-item>
    <n-descriptions-item label="Discharge Documents">
      <p>icons, icons</p>
    </n-descriptions-item>
    <n-descriptions-item label="Discharge Date / Time">
      {{
        `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
      }}
    </n-descriptions-item>
    <n-descriptions-item label="Discharge Event">
      Event Link / Component
    </n-descriptions-item>
  </n-descriptions>
</template>
