<template>
   <div class="card">
       <img :src="article.imageUrl" alt="" class="card-img-top">
   </div>
</template>

<script>
import Axios from 'axios';
import config from '@/config';
export default {
    mounted(){
        this.getArticle()
    },
    data(){
        return{
            article:{}
        }
    },
    methods:{
        getArticle(){
          Axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(response =>{
      this.article=response.data.data;
        
    });
        }
    }
}
</script>