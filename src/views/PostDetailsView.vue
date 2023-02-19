<script setup>
import { useRoute } from 'vue-router'
import Post from '../components/Post.vue';
import AddComment from '../components/AddComment.vue';
import { usePostStore } from '@/stores/posts'
import { useCommentStore } from '@/stores/comments'

const { addComment } = useCommentStore()
const { getPost } = usePostStore();

//get route params
const { params } = useRoute();

const storeComment = (comment) => {
  comment.id_post = getPost(params.id).id;
  addComment(comment);
}


//console.log(getPost(params.id))
</script>

<template>
  <main>
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div class="mx-auto mt-4">
          <Post :post_details ="getPost(params.id)"/>
          <AddComment @comment-added="storeComment"/>
        </div>
      </div>
      
    </div>
  </main>
</template>
