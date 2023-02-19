<script setup>
import { reactive } from 'vue'
import { usePostStore } from '@/stores/posts'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

//get store
//{}=>distractring no need to use posts.addPost
const { addPost } = usePostStore()

//set data
const data = reactive({
    post : {
        username : '',
        body : ''
    }
})

//add post
const storePost = () => {
    const post = data.post;
    post.id = uuidv4();
    post.time = moment().format('MMMM Do YYYY, h:mm:ss a');
    addPost(post);
    data.post = {
        username : '',
        body : ''
    }

}
</script>

<template>
    <div class="card mt-2">
        <div class="card-body">
          <form> 
            <div class="mb-3">
                <label for="name" class="form-label">Username</label>

                <input v-model="data.post.username" 
                type="text" class="form-control" 
                id="name" placeholder="name">
            </div>
            <div class="mb-3">
                <label for="post" class="form-label">Post</label>

                <textarea v-model="data.post.body" 
                class="form-control" id="post" rows="3" 
                placeholder="Post"></textarea>
            </div>

            <button :disabled="!data.post.username || !data.post.body"
            @click.prevent="storePost"
            type="submit" class="btn btn-primary">Share</button>
        </form>  
        </div>
    </div>

</template>

<style scoped>

</style>
