<script setup lang="ts">
import { NSpace, NSkeleton, NCard } from "naive-ui";
</script>

<template>
  <n-card title="timeline">
    <n-space vertical>
      <n-skeleton height="40px" width="33%" />
      <n-skeleton height="40px" width="66%" :sharp="false" />
      <n-skeleton height="40px" width="500px" />
    </n-space>
  </n-card>
</template>
