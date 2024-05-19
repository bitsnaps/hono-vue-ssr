<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const Route = useRoute()
console.log(Route, 'Route')
const add = ref(Route.query.aaa || 1)
</script>
<template>
    <div>
        footer
        <div @click="add++">yshuang-{{ add }}</div>
    </div>
</template>
