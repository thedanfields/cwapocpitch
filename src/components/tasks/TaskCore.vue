<script setup lang="ts">
import { UserTaskType, type UserTask } from "@/models/UserTask";
import PatientCore from "../PatientCore.vue";
import { NCard } from "naive-ui";

interface Props {
  task: UserTask;
}
const props = defineProps<Props>();
const taskTitle = `${UserTaskType[props.task.type]}`;
</script>

<template>
  <n-card :title="taskTitle">
    <div class="task">
      <main><slot></slot></main>
      <aside>
        <router-link
          :to="{
            name: 'patient',
            params: { patient_id: props.task.patient.id },
          }"
        >
          <PatientCore :patient="props.task.patient" />
        </router-link>
      </aside>
    </div>
  </n-card>
</template>

<style>
.task {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 16px;
}

aside {
  align-self: start;
}
</style>
