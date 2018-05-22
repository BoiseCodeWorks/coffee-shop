<template>
  <div class="home">
    <h1>Welcome to the Coffee Shop</h1>
    <h4>Menu</h4>
    <ol>
      <li v-for="(food, index) in menuItems">
        <router-link :to="{ name: 'foodDetails', params: { id: index }}">{{food.name}}</router-link>
      </li>
    </ol>
    <input type="text" v-model="query">
    <button @click="nachos">GET THE NACHOS!!!!!</button>
  </div>
</template> 

<script>
export default {
  name: 'Home',
  data(){
    return {
      foodId: this.$route.params.foodId,
      query: ''
    }
  },
  computed: {
    menuItems(){
      return this.$store.state.menuItems
    }
  },
  methods: {
    nachos(){
      this.$store.dispatch("getNachos", this.query)
    }
  }
}

</script>

<style>

</style>