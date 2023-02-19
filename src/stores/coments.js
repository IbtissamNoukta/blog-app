import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useComentStore = defineStore('coments', () => {
    //state
      // we use local storage if we refresh (actualiser) page data document't go
      //kn7wloh mn json ljs object
      const coments = ref(JSON.parse(localStorage.getItem('coments')) || []);
    //action
      function addComent(coment){
        this.coments.unshift(coment);
        localStorage.setItem("coments", JSON.stringify(this.coments));
      }
    //getter
    //une fois tmodifier ktreturni jdid
      function getPostComents(comentId){
        return this.coments.filter(coment => coment.id_post === comentId).length;
      }
    
      return { coments, addComent, getPostComents }
    })