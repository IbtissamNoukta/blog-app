import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommentStore = defineStore('comments', () => {
    //state
      // we use local storage if we refresh (actualiser) page data document't go
      //kn7wloh mn json ljs object
      const comments = ref(JSON.parse(localStorage.getItem('comments')) || []);
    //action
      function addComment(comment){
        this.comments.unshift(comment);
        localStorage.setItem("comments", JSON.stringify(this.comments));
      }
    //getter
    //une fois tmodifier ktreturni jdid
      function getPostComments(commentId){
        return this.comments.filter(comment => comment.id_post === commentId).length;
      }
    
      return { comments, addComment, getPostComments }
    })