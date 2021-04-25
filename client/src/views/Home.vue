<template>
  <div class="home">
    <h1 id="home-h1">Top Secret Accounts With Vue</h1>
    <h2 id="home-h2">An authentication system made with vue and express</h2>
    <h3 id="home-h3"><b>Fill our registration form to join us</b></h3>
    <vs-button id="home-register" size="large" color="rgb(148, 63, 74)" type="filled" to="/register">Become a Member Now!</vs-button>
    <vs-button id="home-register" color="rgb(97, 77, 79)" type="flat" to="/register">Or Login</vs-button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #home-h1 {
    padding-top: 20vh;
    color: rgb(148, 63, 74);
    font-size: 40pt;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
  }
  #home-h2 {
    padding-top: 10px;
    color: rgb(97, 77, 79);
    font-size: 18pt;
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
  }
  #home-h3 {
    padding-top: 40px;
    color: rgb(59, 48, 49);
    font-size: 16pt;
    font-weight: 300;
    font-family: 'Nunito', sans-serif;
  }


  #home-register {
    margin-top: 10px;
  }
</style>
