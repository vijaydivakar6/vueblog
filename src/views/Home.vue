<template>
  <div class="home">
<div class="row">
  <div class="col-md-8 offset-md-2" v-if="articles.data" v-for="article in articles.data" :key="article.id">
  <Article :article="article"/>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from 'axios';
import config from '@/config';
import Article from '@/components/Article.vue'

export default {
  name: "Home",
  components: {
    Article
  },
  data(){
    return{
    articles:{}
    }
  },
  mounted(){
    this.getArticles();
  },
  methods:{
    getArticles(){
  Axios.get(`${config.apiUrl}/articles`).then(response =>{
    this.articles=response.data.data;
  })
    }
  }

};
</script>
