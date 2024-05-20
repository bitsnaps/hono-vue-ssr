
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <div>
        <span>Home to</span>
        <router-link to="/">index</router-link>
    </div>
</template>
