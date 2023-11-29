<template>
    <div class="block grid">
      <div
        v-for="(block, index) in component.blocks"
        :key="index"
        :class="'grid-' + gridAdapter(component.gridNumber)"
      >
        <ComponentAdapter :component="block"></ComponentAdapter>
      </div>
    </div>
  </template>
  
  <script setup>
  import ComponentAdapter from '@/adapters/ComponentAdapter'
  import gridAdapter from '@/services/gridAdapter'
  
  const props = defineProps({
    component: Object // Assure-toi d'ajuster le type selon la structure de tes données
  });

  </script>
  