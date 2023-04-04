<template>
  <div class="hello">
    <div class="columns p-4 is-align-items-center">
      <div class="column is-11">
        <input v-model="texto" class="input is-link is-small" type="text" placeholder="Pesquisar">
      </div>
      <div class="column ">
        <button v-on:click="search" class="button is-link">Buscar</button>
      </div>
    </div>

    <article v-for="i in b" class="columns is-align-items-center ">
      <figure class="media-right column is-1 ">
        <p class="image is-64x64 ">
          <img class="is-rounded" :src="i.picture.large">
        </p>
      </figure>
      <div class="media-content column is-align-items-left ">
        <div class="content has-text-left ">
          <p>
            <strong>{{ i.name.first }} {{ i.name.last }}</strong> <small>@{{ i.login.username }}</small>
            <br>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import api from "/services/api";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      a: null,
      b: this.a,
      texto: null      
    }
  },
  mounted() {
    api.get().then(response => {
      this.a = response.data.results
      // console.log(this.a)
    })
  },
  methods: {
    // Arrow function não aponta para a instâcia VUE, por isso não usamos
    // pesquisa: () => {
    //   console.log(this);
    //   // console.log(this.a);
    // },
    search() {
      this.b = ""
      let encontrados = this.a.filter((elemento)=>{
            return (elemento.name.first).toLowerCase().indexOf(this.texto) === 0; 
        })
        this.b = encontrados
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
