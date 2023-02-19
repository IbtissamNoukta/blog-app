<script setup>
import { useLikeStore } from '@/stores/likes'
import { v4 as uuidv4 } from 'uuid';
import { RouterLink } from 'vue-router'

 //get store
const { addLike, getPostLikes } = useLikeStore()

//define props
const props = defineProps({
    post : {
        type : Object,
        required : true,
    },
    post_details : {
      type : Object,
      required : true,
    }
});
console.log(props.post_details)

const storeLike = (PostId) => {
  const like = {
    id :  uuidv4(),
    id_post : PostId,
  }
  addLike(like);
}
// console.log(post)
</script>

<template>

<!-- post from Posts -->
<div class="card mb-2" v-if="post">
  <div class="card-body">
    <RouterLink :to="`/post/${post.id}`" class="text-decoration-none text-dark">
      {{ post.body }}
    </RouterLink>
  </div>
  <div class="card-footer bg-white d-flex justify-content-between align-items-center">
    <span>
        <i class="bi bi-person"></i>
        {{ post.username }}
    </span>
    <span @click="storeLike(post.id)"  style="cursor: pointer;">
        <i class="bi bi-heart"></i>
        {{ getPostLikes(post.id) }}
    </span>
    <RouterLink :to="`/post/${post.id}`" class="text-decoration-none text-dark">
      <span style="cursor: pointer;">
        <i class="bi bi-chat"></i>
      </span>
    </RouterLink>
    <span class="text-secondary">
        <i class="bi bi-alarm"></i>
        {{ post.time }}
    </span>
  </div>
</div>

<!-- post_details from postDetailsView -->
<div class="card mb-2" v-else>
  <div class="card-body">
      {{ post_details.body }}
  </div>
  <div class="card-footer bg-white d-flex justify-content-between align-items-center">
    <span>
        <i class="bi bi-person"></i>
        {{ post_details.username }}
    </span>
    <span @click="storeLike(post_details.id)"  style="cursor: pointer;">
        <i class="bi bi-heart"></i>
        {{ getPostLikes(post_details.id) }}
    </span>
      <span style="cursor: pointer;">
        <i class="bi bi-chat"></i>
      </span>
    <span class="text-secondary">
        <i class="bi bi-alarm"></i>
        {{ post_details.time }}
    </span>
  </div>
</div>
</template>
