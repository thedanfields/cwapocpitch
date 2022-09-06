<script setup lang="ts">
import { UserTask, UserTaskType } from "@/models/UserTask";
import {
  defineAsyncComponent,
  inject,
  onBeforeMount,
  ref,
  type Component,
} from "vue";
import { NDivider } from "naive-ui";
import { InjectionKeys } from "@/constants";
import type { IUserTaskService } from "@/services/UserTaskService";
import TaskCore from "../components/tasks/TaskCore.vue";

const enrollmentAttemptTaskSummary = defineAsyncComponent(
  () => import("@/components/tasks/EnrollmentAttemptTaskSummary.vue")
);
const mrpTaskSummary = defineAsyncComponent(
  () => import("@/components/tasks/MRPTaskSummary.vue")
);

const modelComponentMap = new Map<UserTaskType, Component>([
  [UserTaskType.EnrollmentAttempt, enrollmentAttemptTaskSummary],
  [UserTaskType.MRP, mrpTaskSummary],
]);

function taskComponentFactory(taskType: UserTaskType): Component {
  const taskComponent = modelComponentMap.get(taskType);
  if (taskComponent === undefined) {
    // TODO return a generic task component instead?
    throw new Error(`unable to determine component for Task type: ${taskType}`);
  }
  return taskComponent;
}

const currentUserId = "some_user_id";
const today = new Date();
const currentTask = ref<UserTask | null>();
const completedTasks = ref<UserTask[]>();

onBeforeMount(async () => {
  const taskService = inject(InjectionKeys.UserTaskService) as IUserTaskService;
  currentTask.value = await taskService.fetchCurrent(currentUserId);
  completedTasks.value = await taskService.fetchCompleted(currentUserId, today);
});
</script>

<template>
  <n-divider title-placement="left">current</n-divider>
  <section v-if="currentTask" class="current-task">
    <TaskCore :task="currentTask">
      <component
        :is="taskComponentFactory(currentTask.type)"
        :task="currentTask"
      ></component>
    </TaskCore>
  </section>
  <n-divider title-placement="left">completed</n-divider>
  <section class="completed-tasks">
    <section class="tasks" v-for="task in completedTasks" :key="task.id">
      <TaskCore :task="task">
        <component
          :is="taskComponentFactory(task.type)"
          :task="task"
        ></component>
      </TaskCore>
    </section>
  </section>
</template>

<style>
.tasks > div {
  margin-bottom: 1rem;
}
</style>
