<template>
  <div class="container my-5">
    <div class="row">
        <div class="col-8 offset-2">
           <div class="card" v-if="!loading">
       <img height="500px" :src="article.imageUrl" alt="" class="card-img-top">
       <div class="card-body">
         <h1 class="card-title text-center">
           {{article.title}}
         </h1>
         <div class="article-content"   v-html="article.content"></div>
         <div class="comments my-4">
            <Disqus  shortname="community-blog" :identifier="article.slug" :url="url"></Disqus >
         </div>
       </div>
   </div>
   <div class="loader text-center" v-else>
      <i class="fa fa-spin fa-5x fa-spinner" aria-hidden="true" ></i>
   </div>
          
        </div>
    </div>
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
            article:{},
            loading:true,
            url:window.location.href
        }
    },
    methods:{
        getArticle(){
          Axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(response =>{
            this.loading=false;
      this.article=response.data.data;
        
    });
        }
    }
}
</script>