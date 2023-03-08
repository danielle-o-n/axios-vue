<template>
  <div class="hello">
    <div class="columns p-4 is-align-items-center">
      <div class="column is-11">
        <input class="input is-link is-small" type="text" placeholder="Pesquisar">
      </div>
      <div class="column ">
        <button class="button is-link">Buscar</button>
      </div>
    </div>
    <div class="lista">
      <div v-for="i in a" class="user">
        <img :src=" i.picture.large " alt="">
        <p>{{ i.name.first }}</p>

      </div>
    </div>
  </div>
</template>

<script>
import api from "/services/api";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      a:null,
      // b: [{nome:'dani'},{nome:'eu', idade: 20}]
    }
  },
  mounted(){
    api.get().then(response => {
      this.a = response.data.results
      console.log(this.a)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 30px;
  width: 30px;
}
</style>
