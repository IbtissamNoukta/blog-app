<script setup>
import { usePostStore } from '@/stores/posts'
import Post from '../components/Post.vue';

 //get store
const { getPosts } = usePostStore()


</script>

<template>
    <div class="mx-auto mt-4">
        <Post v-for="post in getPosts()"
        :key="post.id"
        :post="post" />
    </div>
</template>