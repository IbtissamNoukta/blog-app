<script setup>
import { usePostStore } from '@/stores/posts'
import Post from '../components/Post.vue';
import { useCommentStore } from '@/stores/comments'


 //get store
const { getPosts } = usePostStore()
const { getPostComments } = useCommentStore()


</script>

<template>
    <div class="mx-auto mt-4">
        <h3 class="my-3"><i class="bi bi-text-left"></i> All Posts</h3>
        <Post v-for="post in getPosts()"
        :key="post.id"
        :post="post"
        :get_post_comments="getPostComments(post.id).length" />
    </div>
</template>