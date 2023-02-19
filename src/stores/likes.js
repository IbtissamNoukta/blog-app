import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLikeStore = defineStore('likes', () => {
    //state
      // we use local storage if we refresh (actualiser) page data document't go
      //kn7wloh mn json ljs object
      const likes = ref(JSON.parse(localStorage.getItem('likes')) || []);
    //action
      function addLike(like){
        this.likes.unshift(like);
        localStorage.setItem("likes", JSON.stringify(this.likes));
      }
    //getter
    //une fois tmodifier ktreturni jdid
      function getPostLikes(postId){
        return this.likes.filter(like => like.id_post === postId).length;
      }
    
      return { likes, addLike, getPostLikes }
    })