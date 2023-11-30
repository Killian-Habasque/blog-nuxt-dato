<script setup>
defineProps(['component'])

</script>

<template>
  <div class="block blk__relation grid">
    <div v-for="component of component.relationPosts" :key="component" class="grid-4">
      <Card :post="component" />
    </div>
  </div>
</template>