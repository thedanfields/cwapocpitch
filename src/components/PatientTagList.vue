<script setup lang="ts">
import { PatientTagSeverity } from "@/models/PatientTag";
import type PatientTag from "@/models/PatientTag";
import { NSpace, NTag } from "naive-ui";

interface Props {
  tags: PatientTag[];
}

const props = defineProps<Props>();

type tagType = "default" | "error" | "primary" | "info" | "success" | "warning";

interface TagInfo {
  type: tagType;
  label: string;
  key: string;
}

const severityToTagTypeMap = new Map<PatientTagSeverity, tagType>([
  [PatientTagSeverity.None, "default"],
  [PatientTagSeverity.Low, "info"],
  [PatientTagSeverity.Medium, "warning"],
  [PatientTagSeverity.High, "error"],
]);

function toTagInfo(tag: PatientTag): TagInfo {
  let type = severityToTagTypeMap.get(tag.severity);
  if (type === undefined) {
    type = "default";
  }
  return { type: type, label: tag.label, key: tag.label };
}

const orderedTags = props.tags
  .slice()
  .sort((a, b) => b.severity - a.severity)
  .map(toTagInfo);
</script>
<template>
  <n-space>
    <n-tag v-for="tag in orderedTags" :key="tag.key" :type="tag.type">
      {{ tag.label }}
    </n-tag>
  </n-space>
</template>
