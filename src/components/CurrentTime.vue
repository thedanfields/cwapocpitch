<script setup lang="ts">
import { InjectionKeys } from "@/constants";
import type { ITimeService } from "@/services/TimeService";
import { inject, onMounted, ref } from "vue";

interface Props {
  timeZone: string;
}
const props = defineProps<Props>();
const timeService = inject(InjectionKeys.TimeService) as ITimeService;
const currentTime = ref(getTime());

function getTime() {
  const current = timeService
    .getCurrentTime(props.timeZone)
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  return current;
}

onMounted(() => {
  setInterval(() => {
    currentTime.value = getTime();
  }, 1000);
});
</script>
<template>
  <div>
    {{ currentTime }}
  </div>
</template>
