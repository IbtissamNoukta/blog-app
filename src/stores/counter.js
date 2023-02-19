import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('posts', () => {
//state
  // we use local storage if we refresh (actualiser) page data document't go
  //kn7wloh mn json ljs object
  const posts = ref(JSON.parse(localStorage.getItem('posts')) || []);
//action
  function addPost(post){
    this.posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(this.posts));
  }
  return { posts, addPost }
})
