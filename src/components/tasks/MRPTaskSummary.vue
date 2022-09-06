<script setup lang="ts">
import { type MRPTask, UserTaskType } from "@/models/UserTask";

interface Props {
  task: MRPTask;
}
const props = defineProps<Props>();
</script>

<template>
  {{ UserTaskType[props.task.type] }}
</template>
