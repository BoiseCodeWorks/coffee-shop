<template>
  <div class="foodDetails">
    <h1>DETAILS</h1>
    <p>{{item.name}}</p>
    <p>{{item.description}}</p>
    <p>{{item.price}}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'FoodDetails',
  data(){
    return {
      foodId: this.$route.params.id
    }
  },
  computed: {
    item(){
      return this.$store.state.menuItems[this.foodId]
    }
  },
  methods:{
    addToCart(){
      this.$store.dispatch('addItemToCart', this.item)
    }
  }
}

</script>

<style>

</style>