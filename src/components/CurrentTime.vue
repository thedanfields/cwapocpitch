<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  timeZone: string;
}
const props = defineProps<Props>();

const currentTime = ref(getTime());

function getTime() {
  const current = new Date(
    new Date().toLocaleString("en-US", {
      timeZone: props.timeZone,
    })
  ).toLocaleString("en-US", { hour: "numeric", minute: "numeric" });
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
