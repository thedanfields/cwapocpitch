<script setup lang="ts">
import type { MRPTask } from "@/models/UserTask";
import {
  NDescriptions,
  NDescriptionsItem,
  NSpace,
  NIcon,
  NButton,
} from "naive-ui";

import { ClipboardSharp, CompassSharp } from "@vicons/ionicons5";

interface Props {
  task: MRPTask;
}
const props = defineProps<Props>();
</script>

<template>
  <n-descriptions label-placement="top">
    <n-descriptions-item label="priority">
      <p>High</p>
    </n-descriptions-item>
    <n-descriptions-item label="documents">
      <n-space>
        <n-button>
          <template #icon>
            <n-icon>
              <clipboard-sharp />
            </n-icon>
          </template>
          discharge document
        </n-button>
        <n-button>
          <template #icon>
            <n-icon>
              <compass-sharp />
            </n-icon>
          </template>
          MAP
        </n-button>
      </n-space>
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
