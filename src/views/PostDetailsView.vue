<script setup>
import { useRoute } from 'vue-router'
import Post from '../components/Post.vue';
import { usePostStore } from '@/stores/posts'


//get route params
const { params } = useRoute();

const { getPost } = usePostStore();

//console.log(getPost(params.id))
</script>

<template>
  <main>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="mx-auto mt-4">
          <Post :post_details ="getPost(params.id)"/>
        </div>
      </div>
    </div>
  </main>
</template>
