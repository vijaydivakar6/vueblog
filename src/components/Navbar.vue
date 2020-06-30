<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" href="#" to="/">
  	<img src="../assets/logo.png" width="50px" height="50px">
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    	 <li class="nav-item">
    <router-link class="nav-link" to="/login" v-if="!authUser">Login</router-link>
    </li>

    <li class="nav-item">
    <router-link class="nav-link" to="/signup" v-if="!authUser">Signup</router-link>
    </li>
      <li class="nav-item dropdown" v-if="authUser"> 
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          WElcome{{authUser.name}}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="logout()">Logout</a>
         
        
        </div>
      </li>
    </ul>

  </div>
</nav>
</template>

<script>
// @ is an alias to /src


export default {
mounted(){
  console.log(this.$root)
},
computed:{
  authUser(){
    return this.$root.auth.user
  }
},
methods:{
  logout(){
    localStorage.removeItem("auth");
    this.$root.auth={};
     this.$noty.success("Successfully loggedOut")
  }
}

};
</script>