<script setup>
import { useRoute } from 'vue-router'
import Post from '../components/Post.vue';
import Comment from '../components/Comment.vue';
import AddComment from '../components/AddComment.vue';
import { usePostStore } from '@/stores/posts'
import { useCommentStore } from '@/stores/comments'

const { addComment, getPostComments } = useCommentStore()
const { getPost } = usePostStore();

//get route params
const { params } = useRoute();

//add comment
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
          <h3 class="my-3"><i class="bi bi-text-left"></i> Post</h3>
          <Post :post_details ="getPost(params.id)"
                :get_post_comments="getPostComments(params.id).length"/>
          <h3 class="my-3"><i class="bi bi-chat-square-text"></i> Comments</h3>
          <Comment v-for="comment in getPostComments(params.id)"
                    :key="comment.id"
                  :comment="comment" />
          <h3 class="my-3">Add Comment</h3>
          <AddComment @comment-added="storeComment"/>
        </div>
      </div>
      
    </div>
  </main>
</template>
