<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <div>
        <span>index to</span>
        <span @click="router.push('/home?a=1111&b=222')">home</span>
    </div>
</template>
