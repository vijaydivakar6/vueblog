<template>
  <div class="login">
  	<div class="row my-5">
  		<div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-body">
            <h4 class="text-center my-4">Login</h4>
            <div class="form-group">
              <input  v-bind:class="{'is-invalid':errors.email, 'is-valid':!errors.email && this.submitted}" v-model="email" type="text" placeholder="email" class="form-control">
              <div class="errors" v-if="errors.email">
                 <small class="text-danger" :key="error" v-for="error in errors.email">{{error}}</small>
              </div>
            </div>
              <div class="form-group">
              <input v-bind:class="{'is-invalid':errors.password, 'is-valid':!errors.password && this.submitted}"  v-model="password" type="password" placeholder="password" class="form-control">
               <div class="errors" v-if="errors.password">
                <small class="text-danger" :key="error" v-for="error in errors.password">{{error}}</small>
              </div>
            </div>
             <div class="form-group text-center">
              <button @click="loginUser()"  :disabled="loading" class="btn form-control btn-success">
                  <i class="fa fa-spin fa-spinner" aria-hidden="true" v-if="loading"></i>
                {{loading ? "":'Login'}}
              </button>
            </div>
          </div>
        </div>
      </div>
  	</div>
 
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from 'axios';
import config from '@/config'

export default {
  beforeRouteEnter (to,from,next){
    console.log(to,from,next)
 if( localStorage.getItem("auth")){
   return next({path:"/"});
 }

  next();
  },
  name: "Login", 
  components: {
    
  },
  
  data(){
    return{
      email:"",
      password:"",
      errors:{},
       submitted:false,
      loading:false
    };
  },
  methods:{
    loginUser(){
      this.loading=true;
       Axios.post(`${config.apiUrl}/auth/login`,{
         email:this.email,
         password:this.password,

       }).then(response=>{
         this.loading=false;
       this.$root.auth=response.data.data;
       localStorage.setItem("auth",JSON.stringify(response.data.data));
       this.$noty.success("Successfully loggedin")
       this.$router.push('/')
       }).catch(({response})=>{
               this.loading=false;
               this.$noty.error("Oops ! something wnt wrong.")
         if(response.status===401){
         this.errors={
          email:["these credentials do not match our records."]
         };
         }
         else{
        this.errors=response.data;
         }
       });
    }
  }
};
</script>
