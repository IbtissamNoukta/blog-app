<script setup>
const props = defineProps({
    comment:{
        type : Object,
        required : true,
    }
})

</script>

<template>
    <div class="card mb-2 bg-success bg-opacity-25">
        <div class="card-header">
            <span>
                <i class="bi bi-person"></i>
                {{ comment.username }}
            </span>
        </div>
        <div class="card-body">
            {{ comment.body }}
        </div>
        <div class="card-footer text-end">
            <span class="text-secondary">
                <i class="bi bi-alarm"></i>
                {{ comment.time }}
            </span>
        </div>
    </div>
</template>

<style scoped>

</style>