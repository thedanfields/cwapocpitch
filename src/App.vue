<script setup lang="ts">
import { ref, h, type Component } from "vue";
import { RouterLink, RouterView } from "vue-router";

import { ListOutline as TasksIcon } from "@vicons/ionicons5";
import { NIcon, type MenuOption, NMenu, NSpace, NLayout } from "naive-ui";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "tasks",
          },
        },
        { default: () => "Tasks" }
      ),
    key: "tasks",
    icon: renderIcon(TasksIcon),
  },
];
</script>

<template>
  <div>
    <div class="header">header</div>
    <div class="main">
      <n-space>
        <n-space vertical>
          <n-menu :options="menuOptions" />
        </n-space>
        <RouterView />
      </n-space>
    </div>
    <div class="footer">footer</div>
  </div>
</template>
