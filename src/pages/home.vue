
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <span>
        <span>Home to</span>
        <router-link to="/">
            <span>index</span>
        </router-link>
    </span>
</template>
