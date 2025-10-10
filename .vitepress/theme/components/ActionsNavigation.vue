<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import VPNavBarMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue'
import VPNavScreenMenuGroup from 'vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue'

const props = defineProps<{
  actions: { text: string; link: string }[]
  screenMenu?: boolean
}>()

const route = useRoute()

const currentAction = computed(() => {
  return props.actions.find((version) => route.path.startsWith(version.link))?.text || 'Actions'
})
</script>

<template>
  <VPNavBarMenuGroup
    v-if="!screenMenu"
    :item="{ text: currentAction, items: actions }"
    class="actions-navigation"
  />
  <VPNavScreenMenuGroup v-else :text="currentAction" :items="actions" class="actions-navigation" />
</template>

<style scoped>
.actions-navigation :deep(button .text) {
  color: var(--vp-c-text-1) !important;
}

.actions-navigation:hover :deep(button .text) {
  color: var(--vp-c-text-2) !important;
}
</style>
