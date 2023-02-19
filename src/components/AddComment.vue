<script setup>
import { reactive } from 'vue'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

//get store
//const { addComment } = useCommentStore()

//set data
const data = reactive({
    comment : {
        username : '',
        body : ''
    }
})
//emit event
const emit = defineEmits(['commentAdded']);

//add comment
const storeComment = () => {
    const comment = data.comment;
    comment.id = uuidv4();
    comment.time = moment().format('MMMM Do YYYY, h:mm:ss a');
    emit("commentAdded",comment)
    data.comment = {
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

                <input v-model="data.comment.username" 
                type="text" class="form-control" 
                id="name" placeholder="name">
            </div>
            <div class="mb-3">
                <label for="post" class="form-label">Comment</label>

                <textarea v-model="data.comment.body" 
                class="form-control" id="post" rows="2" 
                placeholder="Comment"></textarea>
            </div>

            <button :disabled="!data.comment.username || !data.comment.body"
            @click.prevent="storeComment"
            type="submit" class="btn btn-primary">Comment</button>
        </form>  
        </div>
    </div>

</template>

<style scoped>

</style>