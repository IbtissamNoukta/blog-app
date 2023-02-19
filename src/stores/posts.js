import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('posts', () => {
//state
  // we use local storage if we refresh (actualiser) page data document't go
  //kn7wloh mn json ljs object
  const posts = ref(JSON.parse(localStorage.getItem('posts')) || []);
//action
  function addPost(post){
    this.posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }
//getter
//une fois tmodifier ktreturni jdid
  function getPosts(){
    return this.posts;
  }
  function getPost(postId){
    return this.posts.find(post => post.id === postId);
  }

  return { posts, addPost, getPosts, getPost }
})

