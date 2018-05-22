import vue from 'vue'
import vuex from 'vuex'
import router from '../router'
import axios from 'axios'

vue.use(vuex)

var api = axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
})



export default new vuex.Store({
  state: {
    menuItems: [
      { 
        name: "Drip Coffee",
        description: "Its a drip coffee what more do you want from me",
        size: "16oz",
        price: 3.99
      },
      { 
        name: "Orange mocha frappachino",
        description: "perfect for that pre-gasoline fight fuel",
        size: "16oz",
        price: 6.99
      },
      { 
        name: "Chocolate Chip Cookie",
        description: "Just like grandmas only a thousand times worse",
        size: "Large",
        price: 4.64
      }
    ],
    cart: []
  },
  mutations: {
    addItemToCart(state, item){
      state.cart.push(item)
    }
  },
  actions:{
    addItemToCart({commit, dispatch}, item){
      commit('addItemToCart', item)
      router.push({name: 'cart'})
    },
    getNachos({commit, dispatch}, foodStuffs){
      api.post("",{query: foodStuffs})
        .then(res=>{
          console.log(res.data.foods)
        })
    }
  }

})