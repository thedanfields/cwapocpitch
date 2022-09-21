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
    <n-descriptions-item label="attempt #">
      {{ props.task.attemptNumber }}
    </n-descriptions-item>
    <n-descriptions-item label="discharge facility">
      ...some facility
    </n-descriptions-item>
    <n-descriptions-item label="discharge date / time">
      {{
        `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
      }}
    </n-descriptions-item>
    <n-descriptions-item label="discharge event">
      Event Link / Component
    </n-descriptions-item>
  </n-descriptions>
</template>
