<script setup lang="ts">
import { NAvatar, NBadge } from "naive-ui";
import type { User } from "@/models/User";

interface Props {
  user: User;
}
const props = defineProps<Props>();
const avatarText = `${props.user.firstName[0]}${props.user.lastName[0]}`;
</script>
<template>
  <section class="user-widget">
    <n-badge value="10+">
      <n-avatar size="medium" value="999+">
        {{ avatarText }}
      </n-avatar>
    </n-badge>
  </section>
</template>
