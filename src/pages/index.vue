<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
    <div>
        <span>index to</span>
        <router-link to="/home?a=1111&b=222">Home</router-link>
    </div>
</template>
