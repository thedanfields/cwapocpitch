<script setup lang="ts">
import type { EnrollmentAttemptTask } from "@/models/UserTask";
import { NDescriptions, NDescriptionsItem } from "naive-ui";

interface Props {
  task: EnrollmentAttemptTask;
}
const props = defineProps<Props>();
</script>

<template>
  <n-descriptions label-placement="top">
    <n-descriptions-item label="Attempt #">
      {{ props.task.attemptNumber }}
    </n-descriptions-item>
    <n-descriptions-item label="Discharge Facility">
      ...some facility
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
