<template>
    <div class="cart">
      {{cart}}
    </div>
  </template>
  
  <script>
    import router from '../router'

  export default {
    name: 'Cart',
    data(){
      return {
      
      }
    },
    mounted(){
      if(this.$store.state.cart.length<1){
        router.push({name: 'Home'})
      }
    },
    computed: {
      cart(){
        return this.$store.state.cart
      }
    },
    methods:{
 
    }
  }
  
  </script>
  
  <style>
  
  </style>