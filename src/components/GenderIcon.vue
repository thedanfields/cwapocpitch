<script setup lang="ts">
import { FemaleOutline, MaleOutline, HelpOutline } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";

interface Props {
  gender?: string;
}
const props = defineProps<Props>();

const isUnknown = props.gender === undefined;
const isMale = !isUnknown && props.gender.toLowerCase() == "m";
const isFemale = !isUnknown && !isMale;
const size = 25;
</script>
<template>
  <div v-if="isUnknown">
    <n-icon :size="size" color="#FCEF91">
      <help-outline />
    </n-icon>
  </div>
  <div v-else-if="isFemale">
    <n-icon :size="size" color="#f8b9d4">
      <female-outline />
    </n-icon>
  </div>
  <div v-else-if="isMale">
    <n-icon :size="size" color="#6ca0dc">
      <male-outline />
    </n-icon>
  </div>
</template>
